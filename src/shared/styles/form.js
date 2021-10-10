import { css } from '@emotion/react';

import { colors } from "./colors";
import { flex, radius } from "./display";
import font from "./font";
import { margin, padding } from "./spacing";


export const label = css({
    fontSize: font.small,
    marginBottom: margin.extraSmall,
    color: colors.black
});

export const input = css({
    width: "100%",
    height: "40px",
    border: "2px solid",
    borderRadius: radius.small,
    paddingLeft: padding.medium,
    fontSize: font.medium,
    background: colors.white
});

export const field = {

};