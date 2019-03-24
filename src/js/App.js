import React from 'react';

import { StoreProvider } from './store';
import Wizard from './components/container/Wizard';
import ThemeToggle from './components/container/ThemeToggle';


const App = () => {
    return (
        <StoreProvider>
            <section className="grid-item-1">
                <ThemeToggle />
            </section>
            <section className="grid-item-2">
                <Wizard />
            </section>
        </StoreProvider>
    );
};

export default App;
