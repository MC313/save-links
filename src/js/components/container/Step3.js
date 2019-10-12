/** @jsx jsx */
import React, { useContext } from "react";

import { css, jsx } from "@emotion/core";

import { font, margin } from "../../styles/styles";
import { formatDataForAPI } from "../../utils";
import { StoreContext } from "../../store";
import LoadingElement from "../presentational/LoadingElement";
import Step from "../presentational/Step";

const styles = css`
  margin-bottom: ${margin.medium};
  label {
    margin-bottom: ${margin.small};
  }
  p {
    font-size: ${font.medium};
  }
`;

const Step3 = ({ backButton, title }) => {
  const {
    className,
    formData,
    isSubmitting,
    actions,
    dispatch,
    theme,
  } = useContext(StoreContext);

  const saveLink = async (event) => {
    event.preventDefault();
    const requestPayload = formatDataForAPI(formData);
    const SAVE_LINK_URL =
      "https://r65032qxcg.execute-api.us-east-1.amazonaws.com/dev/links";
    //is this action really neccessary
    //dispatch(actions.saveLinkRequest(formData));
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

  const { name, url, tags, phone, timeValue, timeUnit } = formData;

  return (
    <Step title={title} backButton={backButton}>
      <div css={styles}>
        <label css={{ color: theme.primaryText }}>Link Title</label>
        <p>{name.value || "-"}</p>
      </div>
      <div css={styles}>
        <label css={{ color: theme.primaryText }}>Link Url</label>
        <p>{url.value || "-"}</p>
      </div>
      <div css={styles}>
        <label css={{ color: theme.primaryText }}>Link Tags</label>
        <p>{tags.value || "-"}</p>
      </div>
      <div css={styles}>
        <label css={{ color: theme.primaryText }}>Reminder Phone Number</label>
        <p>{phone.value || "-"}</p>
      </div>
      <div css={styles}>
        <label css={{ color: theme.primaryText }}>Reminder Time</label>
        <p>
          {+timeValue.value > 0
            ? `${timeValue.value} ${timeUnit.value} from now`
            : "-"}
        </p>
      </div>
    </Step>
  );
};

export default Step3;
