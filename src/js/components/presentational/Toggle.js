import React from 'react';

const Toggle = ({ onToggleChange, value }) => {
    return (
        <div className="toggle">
            <input
                className="toggle__input"
                type="checkbox"
                id="switch"
                checked={value}
                onChange={onToggleChange}
            />
            <label htmlFor="switch" className="toggle__label">Toggle</label>
        </div>
    );
};

export default Toggle;
