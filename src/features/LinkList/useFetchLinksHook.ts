import React from "react";

import { Link } from "../../shared/types";
import { LIST_STATES, ListStateTypes } from "./types";
import { getLinks } from "./getLinksService";

export const useFetchLinks = (userId: string) => {
    const [error, setError] = React.useState<null | Error>(null);
    const [links, updateList] = React.useState<[] | Link[]>([]);
    const [listState, setListState] = React.useState<ListStateTypes>(LIST_STATES.LOADING)

    const addLinks = (_links: Link | Link[]) => {
        const links = Array.isArray(_links) ? _links : [_links];
        updateList((linkList) => [...linkList, ...links]);
    };

    const testLinks = [
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        },
        {
            "linkId": "ef608acc-bef9-4766-a972-5748317733e0",
            "description": "firefox developer extension docs",
            "url": "https://extensionworkshop.com/?utm_content=header-link&utm_medium=referral&utm_source=addons.mozilla.org",
            "userId": "GUEST_1634509504758",
            "tags": [
                "extension",
                "add-on",
                "firefox"
            ]
        }
    ]

    React.useEffect(() => {
        (async () => {
            try {
                const { links }: { links: Link[] } = await getLinks(userId);
                addLinks(links);
                const _listState = isEmpty(links) ? LIST_STATES.EMPTY : LIST_STATES.SUCCESS;
                setListState(_listState);
            } catch (error: any) {
                console.error(`Error getting links. ${error}`);
                setError(error);
                setListState(LIST_STATES.ERROR);
            }
        })(),
            () => null;
    }, [])

    return { links, error, listState }
}

const isEmpty = (arr: Link[]) => {
    if (!arr || !Array.isArray(arr) || arr.length === 0) {
        return true
    } else {
        return false;
    };
}