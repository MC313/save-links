import React from 'react';

import { StoreProvider } from './store';
import Wizard from './components/container/Wizard';
import ThemeToggle from './components/container/ThemeToggle';


const App = () => {
    return (
        <StoreProvider>
            <ThemeToggle />
            <Wizard />
        </StoreProvider>
    );
};

export default App;
