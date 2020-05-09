import React from "react";

import styled from "@emotion/styled";

import { font, margin } from "../styles";
//import { StoreContext } from "../../store";

const StyledInfoElement = styled.div({
  marginBottom: margin.medium,
  label: {
    color: "inherit",
    marginBottom: margin.small,
    fontFamily: 'Arial',
    fontWeight: 600,
    letterSpacing: "1px",
  },
  p: {
    color: "inherit",
    fontSize: font.medium,
  },
});

interface InfoItemProps {
  label?: string;
  value?: string;
};

const InfoItem: React.FC<InfoItemProps> = ({ value, label, ...props }) => {
  //const { theme } = useContext(StoreContext);

  return (
    <StyledInfoElement { ...props }>
      <label>{ label }</label>
      <p>{ value || "-" }</p>
    </StyledInfoElement>
  );
};

export default InfoItem;
