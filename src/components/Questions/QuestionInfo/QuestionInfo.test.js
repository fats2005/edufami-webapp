import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import QuestionInfo from "./QuestionInfo";
import Modal from "../../common/Modal/Modal";

import classes from "../Question/Question.module.scss";
import Img from "../../common/img";

describe("<QuestionInfo />", () => {
  let wrapper;
  let currentStep = {
    id: 10
  };
  let nextStep = {};

  beforeEach(() => {
    wrapper = shallow(
      <QuestionInfo currentStep={currentStep} nextStep={nextStep} />
    );
  });

  it("shoudl render a questionBox id selector", () => {
    expect(wrapper.find("#questionBox")).toHaveLength(1);
  });

  it("should render a <Modal /> component to exit", () => {
    expect(wrapper.find(Modal)).toHaveLength(1);
  });

  it("should render an instrucction", () => {
    expect(wrapper.find("h4#questionInstruction")).toHaveLength(1);
  });

  it("should render an <Img /> component related to the image of the question", () => {
    expect(wrapper.find(Img)).toHaveLength(1);
  });

  // Render question (It should be the html content of the question)
  // render Feedback
  // Render a progress bar
  // Render button continuar
});
