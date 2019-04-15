import { css } from '@emotion/core';

const lightPurple = 'rgba(154, 103, 234, 1)';
const purple = 'rgba(103, 58, 183, 1)';
const darkPurple = 'rgba(54, 5, 104, 1)';
const red = 'red';
const grey = 'rgba(61, 61, 61, 0.8)';
const white = 'rgba(255, 255, 255, 1)';
const purplishGrey = 'rgb(238,238,242, 1)';

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  * {
    box-sizing: border-box;
  }

  button:hover {
    cursor: pointer;
  }
`;

const radius = {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '100%'
};

const displayFlex = css`
  display: flex;
`;

const flexRow = css`
  ${displayFlex};
  flex-direction: row;
`;

const flexColumn = css`
  ${displayFlex};
  flex-direction: column;
`;

const flexCenter = css`
  ${flexRow};
  justify-content: center;
  align-items: center;
`;

const primaryColors = {
    primary: darkPurple,
    secondary: lightPurple,
    tertiary: purple,
    error: red,
    background: purplishGrey,
    cardBackground: white,
    toggleBackground: darkPurple,
    primaryText: darkPurple,
    secondaryText: white,
    grey,
    white
};

const darkColors = {
    ...primaryColors,
    primary: lightPurple,
    secondary: darkPurple,
    tertiary: purple,
    background: darkPurple,
    cardBackground: lightPurple,
    toggleBackground: lightPurple,
    primaryText: white,
    secondaryText: darkPurple
};

const font = {
    extraSmall: '8px',
    small: '12px',
    medium: '16px',
    large: '20px'
};

const flex = {
    row: flexRow,
    column: flexColumn,
    center: flexCenter
};

const width = {
    auto: 'auto',
    small: '25px',
    medium: '50px',
    large: '100px',
    full: '100%'
};

const height = {
    auto: 'auto',
    small: '25px',
    medium: '50px',
    large: '100px',
    full: '100%'
};

const margin = {
    extraSmall: '5px',
    small: '10px',
    medium: '15px',
    large: '40px'
};

const padding = {
    extraSmall: '5px',
    small: '10px',
    medium: '15px',
    large: '40px'
};

const button = {
    "width": width.full,
    "height": height.medium,
    "borderRadius": radius.small,
    "border": `2px solid ${darkPurple}`,
    "outline": 'none',
    "transition": 'color background-color 0.3s ease-in',
    '&:disabled': {
        opacity: '0.8'
    },
    '&:hover': {
        cursor: 'pointer'
    }
};

const colorTheme = {
    light: { ...primaryColors },
    dark: { ...darkColors }
};

export {
    button,
    flex,
    font,
    width,
    height,
    margin,
    padding,
    radius,
    reset,
    colorTheme
};
