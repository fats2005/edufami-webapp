import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Img from "../../../common/img";
import { Colors, FontSizes } from "../../../styles";

import classes from "./CardLesson.module.scss";

const cardLesson = props => {
  const { lesson } = props;
  return (
    <StyledLink to={`/lesson/${lesson.id}`}>
      <StyledImg src={lesson.image} alt={lesson.name} />
      <Body className={classes.Title}>{lesson.name}</Body>
      <button className="btn btn-primary bg-primary-dark  secondary-text-color">Iniciar</button>
    </StyledLink>
  );
};

export default cardLesson;

const StyledLink = styled(Link)`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-content: space-around;

  word-wrap: break-word;
  background-color: ${Colors.gray};

  height: 15rem;
  width: 100%;
  border-radius: 3rem 5px 5px 5px;
  text-align: center;
`;

const StyledImg = styled(Img)`
  width: 7rem;
`;

const Body = styled.div`
  height: 82px;
  display: flex;
  align-items: center;
  margin: 0;
  font-size: ${FontSizes.f4};
`;
