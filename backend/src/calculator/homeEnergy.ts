import {
  FootprintResult,
  HomeEnergyFootprintInput,
} from "../generated/graphql";

interface FootprintConstants {
  cost: number;
  EF: number;
}

const footprintConstantsByEnergyType: Record<
  keyof HomeEnergyFootprintInput,
  FootprintConstants
> = {
  naturalGas: {
    cost: 10.68,
    EF: 119.58,
  },
  electricity: {
    cost: 0.1188,
    EF: 0.6133,
  },
  fuelOil: {
    cost: 4.02,
    EF: 22.61,
  },
  propane: {
    cost: 2.47,
    EF: 12.43,
  },
};

const footprintAverageByEnergyType: Record<
  keyof HomeEnergyFootprintInput,
  number
> = {
  naturalGas: 3071,
  electricity: 5455,
  fuelOil: 4848,
  propane: 2243,
};

export const calculateFootprintByEnergyType = (
  energyType: keyof HomeEnergyFootprintInput,
  dollars: number
) => {
  const { cost, EF } = footprintConstantsByEnergyType[energyType];
  return Math.round((dollars / cost) * EF * 12);
};

export const calculateHomeEnergyFootprint = (
  input: HomeEnergyFootprintInput
): FootprintResult => {
  const { naturalGas, electricity, fuelOil, propane } = input;

  const average = Object.values(footprintAverageByEnergyType).reduce(
    (total, cost) => total + cost,
    0
  );

  const total = Object.entries(input).reduce(
    (total, [energyType, dollars]) =>
      total +
      calculateFootprintByEnergyType(
        energyType as keyof HomeEnergyFootprintInput,
        dollars
      ),
    0
  );

  return {
    average,
    total,
  };
};
