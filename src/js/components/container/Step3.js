import React, { useContext } from "react";

import { formatDataForAPI } from "../../utils";
import { StoreContext } from "../../store";
import LoadingElement from "../presentational/LoadingElement";
import Step from "../presentational/Step";
import InfoItem from "../presentational/InfoItem";

const Step3 = ({ backButton, title, values }) => {
  const { actions, dispatch } = useContext(StoreContext);

  const { title: linkTitle, url, tags, phone, timeValue, timeUnit } = values;

  const saveLink = async (event) => {
    event.preventDefault();
    const requestPayload = formatDataForAPI(values);
    const SAVE_LINK_URL =
      "https://r65032qxcg.execute-api.us-east-1.amazonaws.com/dev/links";
    try {
      await fetch(SAVE_LINK_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestPayload),
      });
      dispatch(actions.saveLinkSuccess());
    } catch (error) {
      console.error(
        "An error occurred while saving the link. Please try again.",
        error
      );
      dispatch(actions.saveLinkError());
    }
  };

  const fakeSaveLink = () => {
    setTimeout(() => {
      dispatch(actions.saveLinkSuccess());
    }, 1000);
  };

  const timeValueStr =
    +timeValue > 0 ? `${timeValue} ${timeUnit} from now` : null;

  return (
    <Step title={title} backButton={backButton}>
      <InfoItem value={linkTitle} label='Link Title' />
      <InfoItem value={url} label='Link Url' />
      <InfoItem value={tags} label='Link Tags' />
      <InfoItem value={phone} label='Reminder Phone Number' />
      <InfoItem value={timeValueStr} label='Reminder Time' />
    </Step>
  );
};

export default Step3;
