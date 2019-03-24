import React, { useContext } from 'react';

import { StoreContext } from '../../store';
import Toggle from '../presentational/Toggle';

const ThemeToggle = () => {
    const { toggleOn, actions, dispatch } = useContext(StoreContext);
    const onToggleChange = ({ target }) => dispatch(actions.setToggleValue(target.checked));
    const root = document.documentElement;
    if (toggleOn) {
        root.style.setProperty('--primary', 'rgba(255, 255, 255, 1)');
        root.style.setProperty('--secondary', 'rgba(54, 5, 104, 1)');
        root.style.setProperty('--background', 'rgba(54, 5, 104, 1)');
        root.style.setProperty('--card-background', 'rgba(154, 103, 234, 1)');
        root.style.setProperty('--primary-text', 'rgba(255, 255, 255, 1)');
        root.style.setProperty('--secondary-text', 'rgba(54, 5, 104, 1)');
    } else {
        root.style.setProperty('--primary', 'rgba(54, 5, 104, 1)');
        root.style.setProperty('--secondary', 'rgba(255, 255, 255, 1)');
        root.style.setProperty('--background', 'rgba(255, 255, 255, 1)');
        root.style.setProperty('--card-background', 'rgba(255, 255, 255, 1)');
        root.style.setProperty('--primary-text', 'rgba(54, 5, 104, 1)');
        root.style.setProperty('--secondary-text', 'rgba(255, 255, 255, 1)');
    }

    const label = `Turn ${toggleOn ? 'on' : 'off'} the lights!`;
    return (
        <Toggle label={label} onToggleChange={onToggleChange} value={toggleOn}/>
    );
};

export default ThemeToggle;
