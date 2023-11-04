import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import Input from "./input";

it("Component renders correctly", () => {
  const result = render(
    <Input handleSearch={() => null} idOne={() => null} idTwo={() => null} />
  );
  expect(result).toMatchSnapshot();
});

it("Render label tags correctly", () => {
  render(
    <Input handleSearch={() => null} idOne={() => null} idTwo={() => null} />
  );
  const labelElementOne = screen.getByLabelText("Actor/Actress One:");
  const labelElementTwo = screen.getByLabelText("Actor/Actress Two:");
  expect(labelElementOne).toBeTruthy();
  expect(labelElementTwo).toBeTruthy();
});

it("Find field tags", () => {
  render(
    <Input handleSearch={() => null} idOne={() => null} idTwo={() => null} />
  );
  const fieldElements = screen.getAllByRole("textbox");
  expect(fieldElements).toBeTruthy();
});

it("Find button and render text correctly", () => {
  render(
    <Input handleSearch={() => null} idOne={() => null} idTwo={() => null} />
  );
  const buttonElement = screen.getAllByRole("button", { name: "Find Film(s)" });
  expect(buttonElement).toBeTruthy();
});
