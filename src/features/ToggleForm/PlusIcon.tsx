import React from "react";

export const PlusIcon: React.FC<PlusIconProps> = ({ styles }) => {
    return (
        <svg style={ styles } xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
    );
};

interface PlusIconProps extends React.SVGAttributes<SVGElement> {
    styles?: object;
}