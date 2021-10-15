import React from "react";

export const ErrorMessage: React.FC<ErrorMsgProps> = ({ error }) => (
    <React.Fragment>
        { error ? <p aria-live="assertive">{ error }</p> : null }
    </React.Fragment>
);


interface ErrorMsgProps {
    error: undefined | string;
};