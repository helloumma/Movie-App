import { render } from "@testing-library/react";
import { expect, it, test } from "vitest";
import Result from "./result";

it("renders correctly", () => {
  const result = render(<Result moreInfo={[]} />);
  expect(result).toMatchSnapshot();
});

test("Props test", () => {
  it("should render component with correct data", () => {
    const mockData = [
      {
        id: 123,
        title: "test",
        popularity: 5.18,
        overview: "overview",
      },
    ];

    const { data } = render(<Result moreInfo={mockData} />);
    expect(data(mockData)).not.beNull();
  });
});
