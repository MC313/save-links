/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";

import { Notification } from "./types";

export const NotificationContent: React.FC<{ content?: Notification }> = ({
    content
}) => (
    <React.Fragment>
        <p style={ titleStyles }>Reminder</p>
        <span style={ { ...linkStyles, ...marginTopSmall } }>
            Link:&nbsp;&nbsp;
            <a
                target="_blank"
                rel="noopener noreferrer nofollower"
                href={ content?.url }
            >
                { content?.url }
            </a>
        </span>
        <span style={ descriptionStyles }>
            <p style={ marginTopSmall }>Description:&nbsp;&nbsp;</p>
            <p style={ marginTopSmall }>{ content?.description }</p>
        </span>
    </React.Fragment>
);

const titleStyles: React.CSSProperties = {
    margin: 10,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: 600
};

const linkStyles: React.CSSProperties = {
    display: "block",
    textAlign: "left"
};

const descriptionStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    textAlign: "left"
};

const marginTopSmall: React.CSSProperties = {
    margin: "0px 0px 5px 0px"
}