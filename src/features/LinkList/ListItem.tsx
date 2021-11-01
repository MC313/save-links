import React from "react";

import { Link } from "../../shared/types";

export const ListItem: React.FC<ListItemProps> = ({ link }) => {
    const { url } = link;

    return (
        <li>
            <p>
                Link URL:
                <span>{ url }</span>
            </p>
        </li>
    );
};

type ListItemProps = { link: Link }