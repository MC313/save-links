import React from "react";

import { onNotificationConnect } from "./notificationService";

const isEmptyObject = (obj: object | undefined) => {
    if (!obj) return true;
    return !Object.keys(obj).length
};

export const Notification: React.FC<{ userId: string }> = ({ userId }) => {
    const [notification, setNotification] = React.useState<object | undefined>(undefined)

    React.useEffect(() => {
        const socket = onNotificationConnect(userId)

        socket.onAny(({ eventName }) => {
            console.log("event", eventName)
        })

        return () => { }
    }, [])

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