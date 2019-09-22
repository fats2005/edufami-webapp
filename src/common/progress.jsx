import React from "react";
import styled from "styled-components";

import { Colors } from "../styles";

const Progress = ({ value, max, color }) => (
  <ProgressStyled>
    <ProgressBar
      role="progressbar"
      style={{
        width: `${(value / max) * 100}%`
      }}
      aria-valuenow="0"
      aria-valuemin="0"
      aria-valuemax={max}
      color={color}
    >
      <ProgressText>{`${parseInt((value / max) * 100, 10)}%`}</ProgressText>
    </ProgressBar>
  </ProgressStyled>
);

export default Progress;

const ProgressStyled = styled.div`
  width: 70%;
  margin-left: 15%;
  border-radius: 1rem;
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: ${Colors.gray};
`;

const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: ${props => props.color || "#007bff"};
  transition: width 0.6s ease;
`;

const ProgressText = styled.span`
  display: none;
`;
