import React, { useContext } from 'react';

import { StoreContext } from '../../store';
import Toggle from '../presentational/Toggle';

const ThemeToggle = () => {
    const { toggleOn, actions, dispatch } = useContext(StoreContext);
    const onToggleChange = ({ target }) => dispatch(actions.setToggleValue(target.checked));

    return (
        <div className="toggle-container">
            Turn {toggleOn ? 'on' : 'off'} the lights!
            <Toggle onToggleChange={onToggleChange} value={toggleOn}/>
        </div>
    );
};

export default ThemeToggle;
