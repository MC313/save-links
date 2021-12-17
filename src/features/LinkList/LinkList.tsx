import React from "react";

import { Link } from "../../shared/types";
import { useApp } from "../../store";
import { ListItem } from "./ListItem";
import { LIST_STATES } from "./types";
import { useContentByListState } from "./useComponentByStateHook";
import { useFetchLinks } from "./useFetchLinksHook";

export const LinkList = () => {
    const [{ userId }] = useApp();
    const { links, listState } = useFetchLinks(userId);
    const content = useContentByListState(listState);
    const secondaryText = content?.secondaryText;
    const contentComponent = (
        <div>
            <h3>{ content?.primaryText }</h3>
            { secondaryText && <p>{ secondaryText }</p> }
        </div>
    );
    const showList = listState === LIST_STATES.SUCCESS;

    return (
        <React.Fragment>
            {
                showList ? <List links={ links } /> : contentComponent
            }
        </React.Fragment>
    );
};

const List: React.FC<{ links: Link[] }> = ({ links }) => (
    <ul>
        { links.map((link, idx) => <ListItem key={ idx } link={ link } />) }
    </ul>
)


