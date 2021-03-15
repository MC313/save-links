import React from "react";

import styled from "@emotion/styled";

import { onWebSocketInit } from "./notificationService";

export const Notification: React.FC<{ userId: string }> = ({ userId }) => {
    const [notification, setNotification] = React.useState<NotificationInfo | undefined>(undefined)

    let socket = onWebSocketInit(userId)

    socket.onopen = () => {
        console.log("SOCKET OPENED")
    }

    socket.onmessage = ({ data }: any) => {
        console.log("MESSAGE: ", data)
        const payload = JSON.parse(data);
        setNotification(payload);
    }

    socket.onclose = () => {
        console.log("SOCKET CLOSED")
    }

    return (
        <React.Fragment>
            {
                isEmptyObject(notification) &&
                <StyledNotification>
                    <p className="title">Reminder</p>
                    <span className="link">
                        Link:&nbsp;&nbsp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer nofollower"
                            href="https://roygbiv.world/collections/hats"
                        >
                            https://roygbiv.world/collections/hats
                        </a>
                    </span>
                    <span className="description">
                        <p>Description:&nbsp;&nbsp;</p>
                        <p>hello world</p>
                    </span>
                </StyledNotification>
            }
        </React.Fragment>
    )
}

const isEmptyObject = (obj: object | undefined) => {
    if (!obj) return true
    return !Object.keys(obj).length
};

const StyledNotification = styled.div({
    width: "35%",
    minWidth: 320,
    maxWidth: 420,
    height: 125,
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 15,
    marginRight: 15,
    padding: "0px 10px",
    borderRadius: 8,
    backgroundColor: "#000",
    color: "#fff",
    ".title": {
        margin: 10,
        marginBottom: 20,
        textAlign: "center"
    },
    ".description": {
        display: "flex",
        flexDirection: "row",
        textAlign: "left"
    },
    ".description p": {
        margin: "0px"
    },
    ".link": {
        textAlign: "left",
        margin: "0px 0px 15px 0px"
    }
})

interface NotificationInfo {
    description?: string;
    link: string;
}