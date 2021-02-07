import React from "react";

import { onNotificationConnect } from "./notificationService";

const isEmptyObject = (obj: object | undefined) => {
    if (!obj) return true;
    return !Object.keys(obj).length
};

export const Notification: React.FC<{}> = () => {
    const [notification, setNotification] = React.useState<object | undefined>(undefined)

    React.useEffect(() => {
        onNotificationConnect("1234")
            .then((message) => console.log("Websocket Message: ", message))
            .catch((error) => console.log("Websocket Error: ", error))

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