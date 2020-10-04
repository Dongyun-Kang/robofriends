import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("expec to render Card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
  // expect(shallow(<Card />).length).toEqual(1)
});
