import React from 'react';

import { StoreProvider } from './store';
import Steps from './components/container/Steps';
import StepIndicator from './components/container/StepIndicator';

const App = () =>
    (
        <StoreProvider>
            <section className="wizard">
                <Steps/>
                <StepIndicator />
            </section>
        </StoreProvider>
    );


export default App;
