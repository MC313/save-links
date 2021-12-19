import { css } from '@emotion/react';

const _displayFlex = {
  display: "flex"
};

const _flexRow = css`
  ${_displayFlex};
  flex-direction: row;
`;

const _flexColumn = css`
  ${_displayFlex};
  flex-direction: column;
`;

const _flexCenter = css`
  ${_flexRow};
  justify-content: center;
  align-items: center;
`;

const flex = {
  row: _flexRow,
  column: _flexColumn,
  center: _flexCenter
};

const radius = {
  small: '4px',
  medium: '8px',
  large: '12px',
  round: '100%'
};

export { flex, radius };
