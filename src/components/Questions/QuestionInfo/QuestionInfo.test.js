import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import QuestionInfo from "./QuestionInfo";
import Modal from "../../../common/Modal/Modal";
import Img from "../../../common/img";
import Feedback from "../Feedback/Feedback";

configure({ adapter: new Adapter() });

describe("<QuestionInfo />", () => {
  let wrapper;
  const currentStep = {
    id: 10
  };
  const nextStep = {};

  beforeEach(() => {
    wrapper = shallow(<QuestionInfo currentStep={currentStep} nextStep={nextStep} />);
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

  it("should render a question text", () => {
    expect(wrapper.find("#questionText")).toHaveLength(1);
  });

  it("shouldn't render a <Feedback /> component", () => {
    expect(wrapper.find(Feedback)).toHaveLength(0);
  });

  it("should render a progress bar", () => {
    expect(wrapper.find(".progress-info")).toHaveLength(1);
  });

  it("should render a button 'Continuar' and setted as disabled", () => {
    const button = wrapper.find("button#evaluateButton");
    expect(button.text()).toBe("Continuar");
    expect(button.props().disabled).toBe(true);
  });

  it("should enable the button 'Continuar' when the this.state.canEvaluate is true", () => {
    wrapper.setState({ canEvaluate: true }, () => {
      const button = wrapper.find("button#evaluateButton");
      expect(button.props().disabled).toBe(false);
    });
  });
});
