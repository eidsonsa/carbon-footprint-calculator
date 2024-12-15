import { GetWasteFootprintDocument, WasteType } from "@/generated/graphql";
import { MockedResponse } from "@apollo/client/testing";
import { act, render, screen } from "@testing-library/react";
import WasteForm from "@/app/waste/WasteForm";

import ApolloMockProvider from "../mocks/ApolloMockProvider";

const mocks: MockedResponse[] = [
  {
    request: {
      query: GetWasteFootprintDocument,
      variables: {
        input: {
          homeQuantity: 1,
          recicled: [],
        },
      },
    },
    result: {
      data: {
        wasteFootprint: {
          average: 692,
          total: 692,
        },
      },
    },
  },
];

describe("Waste", () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        <ApolloMockProvider mocks={mocks}>
          <WasteForm />
        </ApolloMockProvider>
      )
    );
  });

  it("renders correct questions", async () => {
    const questionTitles = screen
      .getAllByRole("heading", { level: 5 })
      .map((title) => title.textContent);

    expect(questionTitles).toEqual([
      "How many people are in your household?",
      "Which of the following products do you currently recycle in your household?",
    ]);

    expect(screen.getByPlaceholderText("3")).toBeInTheDocument();

    const checkboxes = screen
      .getAllByRole("checkbox")
      .map((checkbox) => checkbox.getAttribute("name"));

    expect(checkboxes).toEqual(Object.values(WasteType));
  });

  it("renders correct waste footprint", async () => {
    const cards = screen
      .getAllByTestId("resultCard")
      .map((title) => title.textContent);

    expect(cards[0]).toEqual(
      expect.stringContaining("692 lbs of CO₂ per year")
    );
    expect(cards[1]).toEqual(
      expect.stringContaining("692 lbs of CO₂ per year")
    );
  });
});
