import { GetHomeEnergyFootprintDocument } from "@/generated/graphql";
import { MockedResponse } from "@apollo/client/testing";
import { act, render, screen } from "@testing-library/react";
import HomeEnergyForm from "@/app/homeenergy/HomeEnergyForm";

import ApolloMockProvider from "../mocks/ApolloMockProvider";

const mocks: MockedResponse[] = [
  {
    request: {
      query: GetHomeEnergyFootprintDocument,
      variables: {
        input: {
          electricity: 0,
          fuelOil: 0,
          naturalGas: 0,
          propane: 0,
        },
      },
    },
    result: {
      data: {
        homeEnergyFootprint: {
          average: 15617,
          total: 0,
        },
      },
    },
  },
];

describe("Home Energy", () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        <ApolloMockProvider mocks={mocks}>
          <HomeEnergyForm />
        </ApolloMockProvider>
      )
    );
  });

  it("renders correct questions", async () => {
    const questionTitles = screen
      .getAllByRole("heading", { level: 5 })
      .map((title) => title.textContent);

    expect(questionTitles).toEqual([
      "How much is your average monthly Electricity bill?",
      "How much is your average monthly Fuel Oil bill?",
      "How much is your average monthly Natural Gas bill?",
      "How much is your average monthly Propane bill?",
    ]);
  });

  it("renders correct home energy footprint", async () => {
    const cards = screen
      .getAllByTestId("resultCard")
      .map((title) => title.textContent);

    expect(cards[0]).toEqual(
      expect.stringContaining("15617 lbs of CO₂ per year")
    );
    expect(cards[1]).toEqual(expect.stringContaining("0 lbs of CO₂ per year"));
  });
});
