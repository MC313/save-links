import React, { useContext } from "react";

import { font, margin } from "../../styles";
import { StoreContext } from "../../store";
import withStyles from "../hoc/WithStyles";

const infoStyles = {
  marginBottom: margin.medium,
  label: {
    color: "inherit",
    marginBottom: margin.small,
  },
  p: {
    color: "inherit",
    fontSize: font.medium,
  },
};

const InfoElement = ({ value, label, ...props }) => {
  return (
    <div {...props}>
      <label>{label}</label>
      <p>{value || "-"}</p>
    </div>
  );
};

const InfoItem = (props) => {
  const { theme } = useContext(StoreContext);

  const themeStyles = { ...infoStyles, color: theme.primaryText };

  const InfoWithStyles = withStyles({ styles: themeStyles })(InfoElement);

  return <InfoWithStyles {...props} />;
};

export default InfoItem;
