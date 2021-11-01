import React from "react";

import { Link } from "../../shared/types";
import { useApp } from "../../store";
import { getLinks } from "./getLinksService";
import { ListItem } from "./ListItem";

export const LinkList = () => {
    const [{ userId }] = useApp();
    const [links, updateList] = React.useState<[] | Link[]>([]);
    const [listState, setListState] = React.useState<ListStateTypes>(LIST_STATES.LOADING)
    const addLinks = (_links: Link | Link[]) => {
        const links = Array.isArray(_links) ? _links : [_links];
        updateList((linkList) => [...linkList, ...links]);
    };

    // extract this into a hook
    React.useEffect(() => {
        (async () => {
            console.log("running this function")
            try {
                const { links }: { links: Link[] } = await getLinks(userId);
                addLinks(links);
                const listState = isEmpty(links) ? "EMPTY" : "SUCCESS";
                setListState(listState);
            } catch (error) {
                console.error(`Error getting links. ${error}`);
                setListState(LIST_STATES.ERROR);
            }
        })(),
            () => null;
    }, [])

    const Component = getComponentByState(listState, links);
    return Component;
};

const Loading: React.FC<{}> = () => <h3>Loading......</h3>

const EmptyList: React.FC<{}> = () =>
    <p>You currently don't have any saved links.</p>

const Error: React.FC<{}> = () =>
    <p>There was an error getting your links. <br />
        Please reload the page and try again.</p>

const List: React.FC<{ links: Link[] }> = ({ links }) => (
    <ul>
        { links.map((link, idx) => <ListItem key={ idx } link={ link } />) }
    </ul>
)

const isEmpty = (arr: Link[]) => {
    if (!arr || !Array.isArray(arr) || arr.length === 0) {
        return true
    } else {
        return false;
    };
}

// Could be a candidate for a hook
const getComponentByState = (listState: ListStateTypes, links: Link[] = []) => {
    let content = <Loading />;
    switch (listState) {
        case LIST_STATES.LOADING:
            content = <Loading />
            break;
        case LIST_STATES.ERROR:
            content = <Error />
            break;
        case LIST_STATES.EMPTY:
            content = <EmptyList />
            break;
        case LIST_STATES.SUCCESS:
            content = <List links={ links } />
            break;
        default:
            return <Error />
    }

    return (
        <div>
            { content }
        </div>
    )
}

enum LIST_STATES {
    LOADING = "LOADING",
    ERROR = "ERROR",
    EMPTY = "EMPTY",
    SUCCESS = "SUCCESS"
}

type ListStateTypes = keyof typeof LIST_STATES;