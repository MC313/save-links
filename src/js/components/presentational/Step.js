import React, { useContext } from 'react';
import { StoreContext } from '../../store';

const Step = ({ children, backButton, title }) => {
    const { actions, dispatch, currentStep } = useContext(StoreContext);
    const navigateBack = () => dispatch(actions.navigateBackward(currentStep));
    const backButtonEl = <button type="button" className="btn--back" onClick={navigateBack} />;

    return (
        <li className="step">
            <div className="step__header">
                {backButton && backButtonEl}
                <h2 className="title">{title}</h2>
            </div>
            {children}
        </li>
    );
};

export default Step;
