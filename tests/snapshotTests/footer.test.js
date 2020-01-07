import React from "react";
import Footer from "../../components/footer";
import renderer from "react-test-renderer";

it("Footer renders correctly", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
