import React from 'react';

const button = ({ text, handleClick }) => (
    <button onClick={handleClick}>{text}</button>
);

export default button;
