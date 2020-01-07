import React from "react";
import LoadingBar from "../../components/loadingBar";
import renderer from "react-test-renderer";

it("LoadingBar renders correctly", () => {
  const tree = renderer.create(<LoadingBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
