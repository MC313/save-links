import React, { useContext } from 'react';

import { formatDataForAPI } from '../../utils';
import { StoreContext } from '../../store';
import LoadingSpinner from '../presentational/LoadingSpinner';
import Step from '../presentational/Step';

const Step3 = ({ backButton, title }) => {
    const { formData, isSubmitting, actions, dispatch } = useContext(StoreContext);

    const submitLink = async (event) => {
        event.preventDefault();
        const formattedData = formatDataForAPI(formData);
        dispatch(actions.createLinkRequest(formData));
        try {
            await fetch('https://r65032qxcg.execute-api.us-east-1.amazonaws.com/dev/links', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formattedData)
            });
            dispatch(actions.createLinkSuccess());
        } catch (error) {
            console.error('An error occured try again', error);
            //dispatch(actions.createLinkError());
        }
    };

    const { name, url, tags, phone, timeValue, timeUnit } = formData;

    return (
        <Step title={title} backButton={backButton}>
            <div className="w-full">
                <div className="flex-column h-100 mgn-b-20">
                    <label className="h-25 mgn-b-10 bold color-gray">Article Title</label>
                    <p className="font-md">{name.value || '-'}</p>
                </div>
                <div className="flex-column h-100 mgn-b-20">
                    <label className="h-25 mgn-b-10 bold color-gray">Article Url</label>
                    <p className="font-md">{url.value || '-'}</p>
                </div>
                <div className="flex-column h-100 mgn-b-20">
                    <label className="h-25 mgn-b-10 bold color-gray">Article Tags</label>
                    <p className="font-md">{tags.value || '-'}</p>
                </div>
                <div className="flex-column h-100 mgn-b-20">
                    <label className="h-25 mgn-b-10 bold color-gray">Reminder Phone Number</label>
                    <p className="font-md">{phone.value || '-'}</p>
                </div>
                <div className="flex-column h-100 mgn-b-20">
                    <label className="h-25 mgn-b-10 bold color-gray">Reminder Time</label>
                    <p className="font-md">{+timeValue.value > 0 ? `${timeValue.value} ${timeUnit.value} from now` : '-'}</p>
                </div>
                <button className="w-full h-50px bg-primary radius-sm" disabled={isSubmitting} onClick={submitLink}>
                    {isSubmitting ? <LoadingSpinner/> : 'Save Article'}
                </button>
            </div>
        </Step>
    );
};

export default Step3;
