import React from "react";
import EventBar from "../../components/eventBar";
import renderer from "react-test-renderer";

it("EventBar renders correctly", () => {
  const tree = renderer.create(<EventBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
