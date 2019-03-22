import React, { useContext } from 'react';

import { StoreContext } from '../../store';

const _setActiveIndicator = (stepId) => [...Array(3)].map((_, index) => {
    if (index + 1 === stepId) {
        return <div className="indicator__icon indicator__icon--active" key={index} />;
    }
    return <div className="indicator__icon" key={index} />;
});

const StepIndicator = () => {
    const { currentStep } = useContext(StoreContext);
    return (
        <div className="indicator">
            {_setActiveIndicator(currentStep)}
        </div>
    );
};

export default StepIndicator;
