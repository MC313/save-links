import styled from "@emotion/styled";
import React from "react";

import { width, card, colors } from "../../shared/styles";
import { navItems } from "./navItems";

export const NavBar: React.FC<{}> = () => {

    return (
        <StyledMainNav>
            <StyledNavItems>
                {
                    navItems.map(({ name, status }: NavItem, idx) =>
                        <NavItem
                            key={ idx }
                            name={ name }
                            status={ status }
                        />
                    )
                }
            </StyledNavItems>
        </StyledMainNav>
    );
};

const NavItem: React.FC<NavItem> = ({ name, status }) => (
    <li className={ status }>
        <a href="#">{ name.toLocaleUpperCase() }</a>
    </li>
);

const StyledMainNav = styled.nav(card, {
    width: "40%",
    maxWidth: "250px",
    minHeight: "50px",
    padding: "0px",
    alignSelf: "end",
    borderRadius: "50px",
    marginTop: "30px",
    marginLeft: "0px",
    ul: {
        width: width.full,
        height: "100%",
        display: "flex"
    }
});

const StyledNavItems = styled.ul({
    width: "100%",
    li: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        textAlign: "center",
        color: colors.almostBlack,
        a: {
            color: "inherit",
            fontSize: "0.4em",
            textDecoration: "none"
        }
    },
    "li.active": {
        color: colors.white,
        background: colors.almostBlack
    }
});

interface NavItem {
    name: string;
    status?: string;
}