import React from "react";

import { getNotification } from "./notificationService";

const isEmptyObject = (obj: object | undefined) => {
    if (!obj) return true;
    return !Object.keys(obj).length
};

export const Notification: React.FC<{}> = () => {
    const [notification, setNotification] = React.useState<object | undefined>(undefined)

    React.useEffect(() => {
        getNotification()
            .then((notification) => {
                console.log("Notification Success: ", notification)
                setNotification(notification)
            })
            .catch(({ message }) => console.log("Notification Error: ", message))

        return () => { }
    }, [notification])

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