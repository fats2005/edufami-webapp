import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Img from "./img";
import Progress from "./progress";
import { Colors, FontSizes } from "../styles";

const CardUnit = props => {
  const { unit, numberOfLessons } = props;
  return (
    <StyledLink to={`/unit/${unit.id}`}>
      <StyledImg src={unit.image} alt={unit.name} />
      <Body>
        <p>{unit.name}</p>
        <UnitAdvance>
          <span>{`0 / ${numberOfLessons}`}</span>
          <Progress value={0} max={numberOfLessons} color={Colors.yellow} />
        </UnitAdvance>
      </Body>
    </StyledLink>
  );
};

export default CardUnit;

const StyledLink = styled(Link)`
  background-color: ${Colors.secondary};
  height: 10rem;
  width: 100%;
  margin: 1rem;
  border-radius: 5px 3rem;
  padding: 1rem;
  display: flex;
  color: ${Colors.secondaryText};
  &:hover {
    text-decoration: none;
    color: ${Colors.secondaryText};
  }
  @media (min-width: 768px) {
    width: 45%;
  }
`;

const Body = styled.div`
  border-radius: inherit;
  padding: 0rem;
  height: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
  width: 100%;
  font-size: ${FontSizes.f4};
`;

const StyledImg = styled(Img)`
  border-radius: inherit;
  height: 100%;
`;

const UnitAdvance = styled.div`
  width: 100%;
  padding-left: 1rem;
  font-size: ${FontSizes.f2};
`;
