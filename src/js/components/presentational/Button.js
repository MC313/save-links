import React, { useContext } from 'react';

import styled from '@emotion/styled';

import { StoreContext } from '../../store';
import { button } from '../../styles/styles';

const Button = ({ className, label, onClickFn }) => {
    const { theme } = useContext(StoreContext);

    const styles = {
        backgroundColor: theme.primaryText,
        color: theme.secondaryText
    };
    return (
        <button style={styles} className={className} type="button" onClick={onClickFn()}>
            {label}
        </button>
    );
};

const StyledButton = styled(Button)`
    ${button}
`;
export default StyledButton;
