import React from 'react';

const Toggle = ({ label, onToggleChange, value }) => {
    return (
        <div className="toggle">
            <p className="toggle__text">{label}</p>
            <input
                className="toggle__input"
                type="checkbox"
                id="switch"
                checked={value}
                onChange={onToggleChange}
            />
            <label htmlFor="switch" className="toggle__label" />
        </div>
    );
};

export default Toggle;
