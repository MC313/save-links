import React from 'react';

import { StoreConsumer } from '../../store';
import Step1 from './Step1';
import Step2 from './step2';
import Step3 from './Step3';

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
        const { current: stepsContainer } = this.stepsContainer;
        stepsContainer.scrollTo({
            top: 0,
            left: offsetValue,
            behavior: 'smooth'
        });
    }

    render () {
        return (
            <StoreConsumer>
                {
                    ({ scrollValue }) => {
                        this.navigateThroughSteps(scrollValue);

                        return (
                            <div className="steps flex-row" ref={this.stepsContainer}>
                                <Step1
                                    title={'Article'}
                                    backButton={false}
                                    stepId={1} />

                                <Step2
                                    title={'Reminder'}
                                    backButton
                                    stepId={2} />

                                <Step3
                                    title={'Review'}
                                    backButton
                                    stepId={3} />
                            </div>
                        );
                    }
                }
            </StoreConsumer>
        );
    }
}

export default Steps;
