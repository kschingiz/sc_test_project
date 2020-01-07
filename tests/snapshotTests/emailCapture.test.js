import React from "react";
import EmailCapture from "../../components/emailCapture";
import renderer from "react-test-renderer";

it("EmailCapture renders correctly", () => {
  const tree = renderer.create(<EmailCapture />).toJSON();
  expect(tree).toMatchSnapshot();
});
