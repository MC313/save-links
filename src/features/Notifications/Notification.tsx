import React from "react";

import { onWebSocketInit } from "./notificationService";

export const Notification: React.FC<{ userId: string }> = ({ userId }) => {
    const [notification, setNotification] = React.useState<object | undefined>(undefined)

    let socket = onWebSocketInit(userId)

    React.useEffect(() => {

        return () => { }
    }, [userId])

    socket.onopen = (event: any) => {
        console.log("SOCKET OPENED: ", event)
    }

    socket.onmessage = (event: any) => {
        console.log("MESSAGE: ", event)
    }

    socket.onclose = (event: any) => {
        console.log("SOCKET CLOSED: ", event)
    }

    return (
        <React.Fragment>
            {
                !isEmptyObject(notification) &&
                <div style={ {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    marginRight: 30
                } }>
                    <p>This is a notification here</p>
                </div>
            }
        </React.Fragment>
    );
};

const isEmptyObject = (obj: object | undefined) => {
    if (!obj) return true;
    return !Object.keys(obj).length
};