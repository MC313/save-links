import React, { useContext } from 'react';

import { formatDataForAPI } from '../../utils';
import { StoreContext } from '../../store';
import LoadingElement from '../presentational/LoadingElement';
import Step from '../presentational/Step';

const Step3 = ({ backButton, title }) => {
    const { formData, isSubmitting, actions, dispatch } = useContext(StoreContext);

    const saveLink = async (event) => {
        event.preventDefault();
        const requestPayload = formatDataForAPI(formData);

        //is this action really neccessary
        dispatch(actions.saveLinkRequest(formData));
        try {
            await fetch('https://r65032qxcg.execute-api.us-east-1.amazonaws.com/dev/links', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestPayload)
            });
            dispatch(actions.saveLinkSuccess());
        } catch (error) {
            console.error('An error occurred when creating the link. Please try again.', error);
            dispatch(actions.saveLinkError());
        }
    };

    // const saveLink = (event) => {
    //     event.preventDefault();
    //     console.log('running save link');
    //     const requestPayload = formatDataForAPI(formData);
    //     dispatch(actions.saveLinkRequest(formData));
    //     setTimeout(() => {
    //         dispatch(actions.saveLinkSuccess());
    //         console.log('dispatching save link action');
    //     }, 3000);
    // };

    const { name, url, tags, phone, timeValue, timeUnit } = formData;

    return (
        <Step title={title} backButton={backButton}>
            <div className="step__content">
                <div className="review-text">
                    <label className="review-text__label">Link Title</label>
                    <p className="review-text__value">{name.value || '-'}</p>
                </div>
                <div className="review-text">
                    <label className="review-text__label">Link Url</label>
                    <p className="review-text__value">{url.value || '-'}</p>
                </div>
                <div className="review-text">
                    <label className="review-text__label">Link Tags</label>
                    <p className="review-text__value">{tags.value || '-'}</p>
                </div>
                <div className="review-text">
                    <label className="review-text__label">Reminder Phone Number</label>
                    <p className="review-text__value">{phone.value || '-'}</p>
                </div>
                <div className="review-text">
                    <label className="review-text__label">Reminder Time</label>
                    <p className="review-text__value">{+timeValue.value > 0 ? `${timeValue.value} ${timeUnit.value} from now` : '-'}</p>
                </div>
            </div>
            <button className="btn--primary" disabled={isSubmitting} onClick={saveLink}>
                {isSubmitting ? <LoadingElement /> : 'Save Link'}
            </button>
        </Step>
    );
};

export default Step3;
