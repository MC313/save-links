import React from 'react';

import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { reset } from '../js/styles/styles';
import { StoreProvider, StoreConsumer } from './store';
import Wizard from './components/container/Wizard';
import ThemeToggle from './components/container/ThemeToggle';


class App extends React.Component {
    render () {
        return (
            <StoreProvider>
                <StoreConsumer>
                    {
                        ({ theme }) => {
                            const styles = {
                                width: '100%',
                                height: '100vh',
                                display: 'grid',
                                gridTemplateRows: '50px 1fr',
                                gridRowGap: '10px',
                                lineHeight: '1',
                                fontSize: '16px',
                                backgroundColor: theme.background
                            };

                            return (
                                <div style={styles}>
                                    <Global styles={reset} />
                                    <section className="grid-item-1">
                                        <ThemeToggle />
                                    </section>
                                    <section className="grid-item-2">
                                        <Wizard />
                                    </section>
                                </div>
                            );
                        }
                    }
                </StoreConsumer>
            </StoreProvider>
        );
    }
}

export default App;
