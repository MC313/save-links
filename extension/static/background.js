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

    socket.onmessage = ({ data }) => {
        const message = JSON.parse(data);
        console.log("WEBSOCKET RESPONSE: ", message);
        chrome.notifications.create("", {
            iconUrl: "./hello_extensions.png",
            type: "basic",
            title: "Test Notification",
            message: `Access link here: ${message.url}`
        });
    };

    socket.onclose = () => console.log("SOCKET CLOSED");
});