import { MoreInfo } from "@/libs/data";
import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import Result from "./result";

const mockData: MoreInfo = {
  results: [
    {
      id: "123",
      title: "test",
      popularity: 5.18,
      overview: "This is a long overview for testing purposes",
      release_date: "2022-01-01",
      poster_path: "/example_poster.jpg",
    },
  ],
  personOne: 1,
  personTwo: 2,
};

it("Props test", () => {
  const { container } = render(
    <Result moreInfo={mockData} isLoading={false} />
  );
  expect(container).not.toBeNull();
});

it("Image renders correctly", () => {
  render(<Result moreInfo={mockData} isLoading={false} />);
  const imageElement = screen.getAllByRole("img");
  expect(imageElement).toHaveLength(2);
});

it("Film title renders correctly with year", () => {
  render(<Result moreInfo={mockData} isLoading={false} />);
  const titleElement = screen.getAllByText("test (2022)");
  expect(titleElement).toBeTruthy();
});

it("Film popularity renders correctly", () => {
  render(<Result moreInfo={mockData} isLoading={false} />);
  const popularityElement = screen.getAllByText("⭐⭐⭐⭐⭐ (5.18)");
  expect(popularityElement).toBeTruthy();
});

it("Film overview renders correctly", () => {
  render(<Result moreInfo={mockData} isLoading={false} />);
  const overviewElement = screen.getAllByText(
    "This is a long overview for testing purposes..."
  );
  expect(overviewElement).toBeTruthy();
});
