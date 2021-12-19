import styled from "@emotion/styled";
import React from "react";
import { margin } from "../../shared/styles";

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
    <StyledList>
        { links.map((link, idx) => <ListItem key={ idx } link={ link } />) }
    </StyledList>
);

const StyledList = styled.ul({
    height: "100%",
    overflowY: "scroll",
    padding: "70px 100px",
    margin: "0px 20px",
    ".card + .card": {
        marginTop: "25px"
    }
});


