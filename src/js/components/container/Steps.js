import React from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { flex } from '../../styles/styles';
import { StoreConsumer } from '../../store';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const styles = css`
  ${flex.row};
  width: $width-full;
  overflow-x: hidden;
  scroll-snap-coordinate: 0 0;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
`;

class Steps extends React.Component {
    constructor (props) {
        super(props);
        this.stepsContainer = React.createRef();
    }

    componentDidMount () {
        this.stepsContainer.current.scrollTo({
            top: 0,
            left: 0
        });
    }

  navigateThroughSteps = (offsetValue) => {
      if (!this.stepsContainer.current) return;
      const { current: stepsElement } = this.stepsContainer;
      stepsElement.scrollTo({
          top: 0,
          left: offsetValue,
          behavior: 'smooth'
      });
  }

  render () {
      return (
          <StoreConsumer>
              {({ scrollValue }) => {
                  this.navigateThroughSteps(scrollValue);

                  return (
                      <ul className={this.props.className} ref={this.stepsContainer}>
                          <Step1 title={'Link'} backButton={false} stepId={1} />

                          <Step2 title={'Reminder'} backButton stepId={2} />

                          <Step3 title={'Review'} backButton stepId={3} />
                      </ul>
                  );
              }}
          </StoreConsumer>
      );
  }
}

const StyledSteps = styled(Steps)`
  ${styles}
`;

export default StyledSteps;
