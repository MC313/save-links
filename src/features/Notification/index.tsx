import React from "react";

import styled from "@emotion/styled";

import { CloseButton } from "./CloseButton";
import { NotificationContent } from "./NotificationContent";
import { onWebSocketInit } from "./notificationService";
import { Notification as INotification } from "./types";
import { colors } from "../../shared/styles";
import { useApp } from "../../store";

export const Notification: React.FC<{}> = () => {
    const [{ appType, userId }] = useApp();
    const [notification, setNotification] = React.useState<INotification>();

    React.useEffect(() => {
        let socket = onWebSocketInit(userId);

        socket.onopen = () => console.log("SOCKET OPENED");

        socket.onmessage = ({ data }: { data: any }) => {
            setNotification(JSON.parse(data));
        };

        socket.onclose = () => console.log("SOCKET CLOSED");
    }, [])

    return (
        <React.Fragment>
            {
                !isEmptyObject(notification) &&
                <StyledNotification>
                    <CloseButton onClick={ () => setNotification(undefined) } />
                    <NotificationContent content={ notification } />
                </StyledNotification>
            }
        </React.Fragment>
    )
}

const isEmptyObject = (obj: object | undefined) => {
    if (!obj) return true;
    return !Object.keys(obj).length;
};

const StyledNotification = styled.div({
    width: "35%",
    minWidth: 320,
    maxWidth: 420,
    height: 115,
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 25,
    marginRight: 25,
    padding: "0px 10px",
    border: "2px solid",
    borderRadius: 8,
    backgroundColor: colors.white,
    color: "#000"
});