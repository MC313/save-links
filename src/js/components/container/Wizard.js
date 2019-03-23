import React, { useContext } from 'react';

import Steps from './Steps';
import StepIndicator from './StepIndicator';
import SuccessOverlay from '../presentational/SuccessOverlay';
import { StoreContext } from '../../store';

const Wizard = () => {
    const { showOverlay } = useContext(StoreContext);

    return (
        <section className="wizard">
            <SuccessOverlay show={showOverlay} />
            <Steps/>
            <StepIndicator />
        </section>
    );
};

export default Wizard;
