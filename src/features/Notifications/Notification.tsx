import React from "react";

import { onNotificationConnect } from "./notificationService";

const isEmptyObject = (obj: object | undefined) => {
    if (!obj) return true;
    return !Object.keys(obj).length
};

export const Notification: React.FC<{ userId: string }> = ({ userId }) => {
    const [notification, setNotification] = React.useState<object | undefined>(undefined)

    const socket = onNotificationConnect(userId)

    React.useEffect(() => {
        socket.on("connect", (value: any) => {
            console.log("webSocket connected successfully!! ", socket.connected)
        })

        return () => { }
    }, [userId])

    socket.on("disconnect", (reason: any) => {
        console.log("WebSocket disconnected!!", reason)
        if (reason === "io server disconnect") {
            socket.connect()
        }
    })

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