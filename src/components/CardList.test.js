import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("expec to render Card component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "JS",
      email: "john@gmail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
  expect(shallow(<CardList robots={mockRobots} />).length).toEqual(1);
});
