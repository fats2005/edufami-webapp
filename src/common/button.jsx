import React from "react";
import styled from "styled-components";
import { Colors, FontSizes } from "../styles";

const Button = ({ children }) => <StyledButton type="button">{children}</StyledButton>;

export default Button;

const StyledButton = styled.button`
  color: ${Colors.white};
  font-size: ${FontSizes.h6};
  padding: 0.5rem 2rem;
  background-color: ${Colors.primaryDark};
  border-radius: 2rem;
  border: none;
`;
