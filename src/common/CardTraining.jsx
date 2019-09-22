import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, FontSizes } from "../styles";

import Img from "./img";

const CardTraining = props => {
  const { data } = props;
  return (
    <StyledLink to={`/trainings/${data.id}`}>
      <StyledImg src={data.image} alt={data.name} />
      <Text>{data.name}</Text>
      <AppIcon>
        <img style={{ width: "4rem" }} src={`/images/${data.app}_small_logo.svg`} alt={data.app} />
      </AppIcon>
      <Bottom />
      <Bottom2 />
    </StyledLink>
  );
};

export default CardTraining;

const StyledLink = styled(Link)`
  margin: 1rem;
  border-radius: 0 3rem;
  border: none;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;

  @media (min-width: 768px) {
    width: 45%;
  }
  @media (min-width: 992px) {
    width: 28%;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  border-top-right-radius: inherit;
`;

const Text = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: inherit;
  z-index: 3;
  color: ${Colors.white};
  background-color: ${Colors.secondary};
  position: relative;
  font-size: ${FontSizes.f4};
`;

const Bottom = styled.div`
  border-bottom-left-radius: inherit;
  bottom: -0.4rem;
  height: 3rem;
  left: 2%;
  position: absolute;
  width: 92%;
  z-index: 2;
  background-color: ${Colors.gray};
`;

const Bottom2 = styled.div`
  border-bottom-left-radius: inherit;
  bottom: -0.8rem;
  height: 3rem;
  left: 4%;
  position: absolute;
  width: 86%;
  z-index: 1;
  background-color: ${Colors.grayDark};
`;

const AppIcon = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 3rem;
  z-index: 4;
`;
