import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import Input from "./input";

it("Component renders correctly", () => {
  const result = render(
    <Input handleSearch={() => null} idOne={() => null} idTwo={() => null} />
  );
  expect(result).toMatchSnapshot();
});

it("Expect form tag to be found", () => {
  render(
    <Input handleSearch={() => null} idOne={() => null} idTwo={() => null} />
  );
  const formElement = screen.getByRole("form");
  expect(formElement).toBeInTheDocument();
});

it("Find label tags", () => {
  render(
    <Input handleSearch={() => null} idOne={() => null} idTwo={() => null} />
  );
  const labelElements = screen.getAllByRole("textbox");
  expect(labelElements.length).toBe(2);
});

it("Render label tags correctly", () => {
  render(
    <Input handleSearch={() => null} idOne={() => null} idTwo={() => null} />
  );
  const labelElementOne = screen.getByLabelText("Actor/Actress One:");
  const labelElementTwo = screen.getByLabelText("Actor/Actress Two:");
  expect(labelElementOne).toBeInTheDocument();
  expect(labelElementTwo).toBeInTheDocument();
});

it("Find field tags", () => {
  render(
    <Input handleSearch={() => null} idOne={() => null} idTwo={() => null} />
  );
  const fieldElements = screen.getAllByRole("textbox");
  expect(fieldElements.length).toBe(2);
});

it("Find button and render text correctly", () => {
  render(
    <Input handleSearch={() => null} idOne={() => null} idTwo={() => null} />
  );
  const buttonElement = screen.getByRole("button", { name: "Find Film(s)" });
  expect(buttonElement).toBeInTheDocument();
});
