import React, { useContext } from 'react';

import { StoreContext } from '../../store';

const _setActiveIndicator = (stepId) => [...Array(3)].map((_, index) => {
    if (index + 1 === stepId) {
        return <div className="indicator active" key={index} />;
    }
    return <div className="indicator" key={index} />;
});

const StepIndicator = () => {
    const { currentStep } = useContext(StoreContext);
    return (
        <div className="indicators h-25px center flex-row">
            {_setActiveIndicator(currentStep)}
        </div>
    );
};

export default StepIndicator;
