import React from "react";

import { Link } from "../../shared/types";
import { LIST_STATES, ListStateTypes } from "./types";

// Could be a candidate for a hook
export const useContentByListState = (listState: ListStateTypes) => {
    let content: Content = getContentByListState(listState);
    return content;
}

const loadingContent = { primaryText: "Loading......" };

const getContentByListState = (listState: Omit<ListStateTypes, "SUCCESS">): Content => ({
    [LIST_STATES.EMPTY]: {
        primaryText: "You currently don't have any saved links."
    },
    [LIST_STATES.ERROR]: {
        primaryText: "There was an error getting your links.",
        secondaryText: "Please reload the page and try again."
    },
    [LIST_STATES.LOADING]: loadingContent
})[listState as string] || loadingContent

type Content = { primaryText: string, secondaryText?: undefined | string }; 