import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  position: fixed;
  z-index: 500;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  overflow: auto;
  justify-content: center;
`;

const loader = ({ show }) => {
  if (show)
    return (
      <Container>
        <Loader type="Oval" color="#ff9800" height="50" width="50" />
      </Container>
    );
  return null;
};

export default loader;
