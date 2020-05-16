import React from "react";

import styled from "@emotion/styled";

import { font, height, radius, width } from "../styles";

//import { StoreContext } from "../../store";
const StyledButton = styled.button({
  width: width.full,
  minHeight: "40px",
  height: "7vh",
  maxHeight: height.medium,
  margin: "0px 13px",
  borderRadius: radius.medium,
  fontSize: font.medium,
  backgroundColor: "black",
  color: "white",
  "&:disabled": {
    opacity: "0.7",
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { };

const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
  //const { theme } = useContext(StoreContext);
  return (
    <StyledButton { ...props }>
      { title }
    </StyledButton>
  );
};

export default Button;
