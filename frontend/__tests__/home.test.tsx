import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  beforeAll(async () => {
    render(await Home());
  });

  it("renders correct cards", () => {
    const cardsContents = screen
      .getAllByTestId("menuCard")
      .map((card) => card.textContent);

    expect(cardsContents).toEqual([
      expect.stringContaining("Home Energy"),
      expect.stringContaining("Transportation"),
      expect.stringContaining("Waste"),
    ]);
  });
});
