import React, { useContext } from 'react';

import { StoreConsumer, StoreContext } from '../../store';
import Step from '../presentational/Step';

const Step3 = ({ backButton, title }) => {
    const { actions, dispatch } = useContext(StoreContext);

    const submitLink = (formData) => {
        dispatch(actions.submitForm(formData));
    };

    return (
        <StoreConsumer>
            {
                ({ formData }) => {
                    const { name, url, tags, phone, timeValue, timeUnit } = formData;
                    return (
                        <Step title={title} backButton={backButton}>
                            <div className="w-full">
                                <div className="flex-column h-100 mgn-b-20">
                                    <label className="h-25 mgn-b-10 bold color-gray">Article Title</label>
                                    <p className="font-md">{name.value}</p>
                                </div>
                                <div className="flex-column h-100 mgn-b-20">
                                    <label className="h-25 mgn-b-10 bold color-gray">Article Url</label>
                                    <p className="font-md">{url.value}</p>
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
                                <button className="w-full h-50px bg-primary radius-sm" onClick={(formData) => submitLink(formData)}>
                                        Save Article
                                </button>
                            </div>
                        </Step>
                    );
                }
            }
        </StoreConsumer>
    );
};

export default Step3;
