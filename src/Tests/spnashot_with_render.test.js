import React from "react";
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer'
import App from "../App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Test with jest/);
  expect(linkElement).toBeInTheDocument();
});

//snapthot
it("renders correctly", () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
