import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ToastContainer } from "react-toastify";
import { Switch } from "react-router-dom";

import App from "./App";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders a <Switch /> component", () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it("renders a <ToastContainer /> component", () => {
    expect(wrapper.find(ToastContainer)).toHaveLength(1);
  });
});
