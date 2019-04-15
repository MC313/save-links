import React, { useContext } from 'react';

import { StoreContext } from '../../store';
import Toggle from '../presentational/Toggle';

const ThemeToggle = ({ className }) => {
    const { actions, dispatch, theme, toggleOn } = useContext(StoreContext);

    const onToggleChange = ({ target }) =>
        dispatch(actions.setToggleValue(target.checked));

    const text = `Turn ${toggleOn ? 'on' : 'off'} the lights!`;

    return (
        <Toggle
            className={className}
            themeStyles={{ ...theme }}
            text={text}
            onToggleChange={onToggleChange}
            value={toggleOn}
        />
    );
};

export default ThemeToggle;
