import React from "react";
import styled from "styled-components";
import { Colors, FontSizes } from "../styles";

const Box = (props) => {
  const { label, children } = props;
  return (
    <BoxTile>
      <Title>{label}</Title>
      <Body>{children}</Body>
    </BoxTile>
  );
};

export default Box;

const BoxTile = styled.div`
  background-color: ${Colors.white};
  color: ${Colors.secondaryText};
  border-radius: 5px;
  margin-bottom: 15px;
`;

const Title = styled.div`
  background-color: ${Colors.gray};
  color: ${Colors.primaryText};
  border: 1px solid ${Colors.grayDark};
  border-radius: inherit;
  padding: 1rem;
  border-radius: 4px 4px 0 2rem;
  font-size: ${FontSizes.f5};
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
