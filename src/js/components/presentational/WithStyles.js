/** @jsx jsx */

import React from 'react';

import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { font, height, padding, radius, width } from '../../styles';

const styles = {
    width: width.full,
    minHeight: '40px',
    height: '7vh',
    maxHeight: height.medium,
    paddingLeft: padding.medium,
    borderRadius: radius.small,
    fontSize: font.medium
};

const WithStyles = ({ styles }) => (WrappedComponent) => {
    return (props) => ( <WrappedComponent {...props} css={styles} /> );
};

export default WithStyles;


// const hoc = (overrideProps) => 
//     (BaseComponent) => 
//         (props) => <BaseComponent {...props} {...overrideProps} />

// const User = ({ name }) => <div>{ name }</div>;
// const alwaysMalcolm = hoc({ name: 'Malcolm'});
// const User2 = alwaysMalcolm(User);