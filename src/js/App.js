import React from 'react';

import { StoreProvider, StoreConsumer } from './store';
import Steps from './components/container/Steps';
import StepIndicator from './components/container/StepIndicator';
import SuccessOverlay from './components/presentational/SuccessOverlay';


const App = () => {
    return (
        <StoreProvider>
            <StoreConsumer>
                {
                    ({ showOverlay }) => {
                        return (
                            <section className="wizard">
                                <SuccessOverlay show={showOverlay} />
                                <Steps/>
                                <StepIndicator />
                            </section>
                        );
                    }
                }
            </StoreConsumer>
        </StoreProvider>
    );
};


export default App;
