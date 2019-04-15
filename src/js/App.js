/** @jsx jsx */

import React from 'react';

import { css, Global, jsx } from '@emotion/core';

import { flex, reset } from '../js/styles/styles';
import { StoreProvider, StoreConsumer } from './store';
import Wizard from './components/container/Wizard';
import ThemeToggle from './components/container/ThemeToggle';

const styles = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  lineheight: 1;
  fontsize: 16px;
  & > div, & > header {
    ${flex.center}
  }
`;

class App extends React.Component {
    render () {
        return (
            <StoreProvider>
                <StoreConsumer>
                    {({ theme }) => {
                        return (
                            <section css={[styles, { backgroundColor: theme.background }]}>
                                <Global styles={reset} />
                                <header css={{ flex: '0 0 50px' }}>
                                    <ThemeToggle />
                                </header>
                                <div css={{ flex: 1 }}>
                                    <Wizard />
                                </div>
                            </section>
                        );
                    }}
                </StoreConsumer>
            </StoreProvider>
        );
    }
}

export default App;
