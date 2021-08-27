// Initialize and create websocket connection here

chrome.runtime.onMessage.addListener(({ userId }, sender, sendMessage) => {
    const WEBSOCKET_BASE_URL = "wss://khxvnnk5g2.execute-api.us-east-1.amazonaws.com";

    const onWebSocketInit = (userId) => {
        return new WebSocket(`${WEBSOCKET_BASE_URL}/dev?userId=${userId}`);
    };

    let socket = onWebSocketInit(userId);

    socket.onopen = () => {
        const message = "Websocket connected";
        console.log(message);
        sendMessage({ message });
    };

    socket.onmessage = ({ data: { url } }) => {
        console.log("WEBSOCKET RESPONSE: ", data);
        chrome.notifications.create("", {
            type: "basic",
            title: "Test Notification",
            message: `Access link here: ${url}`
        });
    };

    socket.onclose = () => console.log("SOCKET CLOSED");
});


// chrome.runtime.onMessage.addListener(async (message, sender) => {
//     console.log("MSG: ", message);
//     console.log("SENDER: ", sender);
//     const url = "https://randomuser.me/api/";
//     try {
//         const _resp = await fetch(url);
//         const { result } = await _resp.json();
//         const [result] = results;
//         console.log("RANDOM USER: ", result);
//     } catch (error) {
//         console.error("Error getting random user. ", error);
//         return { type: "ERROR", error };
//     }
// });