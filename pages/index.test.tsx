import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Home from "./index";

it("renders correctly", () => {
  const result = render(<Home />);
  expect(result).toMatchSnapshot();
});
