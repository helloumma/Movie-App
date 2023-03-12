import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Input from "./input";

it("renders correctly", () => {
  const result = render(
    <Input
      handleSearch={() => null}
      idOne={() => null}
      idTwo={() => null}
      ErrorOne=""
      ErrorTwo=""
    />
  );
  expect(result).toMatchSnapshot();
});
