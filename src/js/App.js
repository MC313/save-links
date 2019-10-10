/** @jsx jsx */

import React from 'react';

import { css, Global, jsx } from '@emotion/core';

import { flex, padding, reset } from '../js/styles';
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
  & > header {
    ${flex.row}
    justify-content: flex-end;
    flex: 0 0 50px;
    padding-right: ${padding.large};
  }
  & > div {
      flex: 1;
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
                                <header>
                                    <ThemeToggle />
                                </header>
                                <div>
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
