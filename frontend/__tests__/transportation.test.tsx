import {
  GetTransportationFootprintDocument,
  MeasureType,
} from "@/generated/graphql";
import { MockedResponse } from "@apollo/client/testing";
import { act, render, screen } from "@testing-library/react";
import TransportationForm from "@/app/transportation/TransportationForm";

import ApolloMockProvider from "../mocks/ApolloMockProvider";

const mocks: MockedResponse[] = [
  {
    request: {
      query: GetTransportationFootprintDocument,
      variables: {
        input: {
          vehicles: [
            {
              measureType: MeasureType.Week,
              miles: 0,
              milesPerGaloon: 21.6,
            },
          ],
        },
      },
    },
    result: {
      data: {
        transportationFootprint: {
          average: 10484,
          total: 0,
        },
      },
    },
  },
];

describe("Transportation", () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        <ApolloMockProvider mocks={mocks}>
          <TransportationForm />
        </ApolloMockProvider>
      )
    );
  });

  it("renders correct questions", async () => {
    const questionTitles = screen
      .getAllByRole("heading", { level: 5 })
      .map((title) => title.textContent);

    expect(questionTitles).toEqual([
      expect.stringContaining("How many miles you drive "),
      "What is the average gas mileage of this vehicle?",
    ]);
  });

  it("renders correct waste footprint", async () => {
    const cards = screen
      .getAllByTestId("resultCard")
      .map((title) => title.textContent);

    expect(cards[0]).toEqual(
      expect.stringContaining("10484 lbs of CO₂ per year")
    );
    expect(cards[1]).toEqual(expect.stringContaining("0 lbs of CO₂ per year"));
  });
});
