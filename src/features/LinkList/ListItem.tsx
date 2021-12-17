import React from "react";

import { Card } from "../../shared/components";
import { Link } from "../../shared/types";

export const ListItem: React.FC<ListItemProps> = ({ link }) => {
    const { url } = link;

    return (
        <Card>
            <p>
                Link URL:
                <span>{ url }</span>
            </p>
        </Card>
    );
};

type ListItemProps = { link: Link }