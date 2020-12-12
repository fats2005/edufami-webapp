import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Img from "./img";
import Button from "./button";
import { Colors, FontSizes } from "../styles";

const cardLesson = (props) => {
  const { lesson } = props;
  return (
    <StyledLink to={`/lesson/${lesson.id}`}>
      <StyledImg src={lesson.image} alt={lesson.name} />
      <Title>{lesson.name}</Title>
      <ButtonContainer>
        <Button>Iniciar</Button>
      </ButtonContainer>
    </StyledLink>
  );
};

export default cardLesson;

const StyledLink = styled(Link)`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  text-align: center;
  word-wrap: break-word;
  background-color: ${Colors.gray};
  height: 12rem;
  width: 100%;
  border-radius: 3rem 5px 5px 5px;
  position: relative;
`;

const StyledImg = styled(Img)`
  width: 7rem;
`;

const Title = styled.div`
  font-size: ${FontSizes.f4};
  color: ${Colors.secondaryDark};
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: -1rem;
`;
