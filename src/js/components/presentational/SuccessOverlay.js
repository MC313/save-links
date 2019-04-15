import React, { useContext } from 'react';

import { StoreContext } from '../../store';

const SuccessOverlay = ({ show }) => {
    const { actions, dispatch } = useContext(StoreContext);
    const resetApp = () => dispatch(actions.resetState());

    return (
        <div
            className="overlay"
            style={
                show ?
                    { display: 'flex', opacity: '1' } :
                    { display: 'none', opacity: '0' }
            }
        >
            <p className="overlay__text">Link Saved Successfully</p>
            <button className="btn--secondary overlay__btn" onClick={resetApp}>
        Save Another Link
            </button>
        </div>
    );
};

export default SuccessOverlay;
