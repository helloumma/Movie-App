import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Result from "./result";

// data needs to be mocked

it("renders correctly", () => {
  const result = render(<Result moreInfo={[]} />);
  expect(result).toMatchSnapshot();
});
