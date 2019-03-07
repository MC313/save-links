import React, { useContext } from 'react';
import { StoreContext } from '../../store';

const Step = ({ children, backButton, title }) => {
    const { actions, dispatch, currentStep } = useContext(StoreContext);
    const buttonClassList = "radius-round w-50px h-50px font-lg bg-primary";
    const titleClassList = `center ${backButton ? 'w-75' : 'w-full'} font-lg color-primary`;
    const navigateBack = () => dispatch(actions.navigateBackward(currentStep));
    const backButtonEl = <button className={buttonClassList} onClick={navigateBack}>{"<"}</button>;

    return (
        <div className="step w-full">
            <div className="w-full flex-row mgn-b-20">
                {backButton && backButtonEl}
                <div className={titleClassList}>{title}</div>
            </div>
            {children}
        </div>
    );
};

export default Step;
