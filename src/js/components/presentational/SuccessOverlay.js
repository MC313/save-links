import React, { useContext } from 'react';

import { StoreContext } from '../../store';

const overlayStyles = {
    width: '100%',
    height: '100%',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '0px',
    left: '0px',
    flexDirection: 'column',
    opacity: '0',
    fontSize: '20px',
    backgroundColor: 'var(--primary)',
    color: '#ffffff',
    transition: 'opacity 0.3s 0.4s ease-in'
};

const SuccessOverlay = ({ show }) => {
    const { actions, dispatch } = useContext(StoreContext);
    const resetApp = () => dispatch(actions.resetState());

    return (
        <div style={show ? { ...overlayStyles, display: 'flex', opacity: '1' } : overlayStyles}>
            <p className="mgn-b-20">Link Saved Successfully</p>
            <button className="w-75 h-50px bg-secondary radius-sm" onClick={resetApp}>
                Save Another Link
            </button>
        </div>
    );
};

export default SuccessOverlay;
