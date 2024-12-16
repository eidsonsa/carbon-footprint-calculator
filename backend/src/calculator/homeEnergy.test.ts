import {
  HomeEnergyFootprintInput,
  MeasureType,
  TransportationFootprintInput,
} from "../generated/graphql";
import {
  calculateFootprintByEnergyType,
  calculateHomeEnergyFootprint,
} from "./homeEnergy";

const input: HomeEnergyFootprintInput = {
  naturalGas: 100,
  electricity: 100,
  fuelOil: 100,
  propane: 100,
};

describe("calculateFootprintByEnergyType()", () => {
  it("should calculate the footprint correctly for natural gas", () => {
    const result = calculateFootprintByEnergyType("naturalGas", 100);
    expect(result).toBe(13436);
  });

  it("should calculate the footprint correctly for electricity", () => {
    const result = calculateFootprintByEnergyType("electricity", 100);
    expect(result).toBe(6195);
  });

  it("should calculate the footprint correctly for fuel oil", () => {
    const result = calculateFootprintByEnergyType("fuelOil", 100);
    expect(result).toBe(6749);
  });

  it("should calculate the footprint correctly for propane", () => {
    const result = calculateFootprintByEnergyType("propane", 100);
    expect(result).toBe(6039);
  });
});

describe("calculateTransportationFootprint()", () => {
  it("should calculate the footprint for multiple sources", () => {
    const result = calculateHomeEnergyFootprint(input);
    expect(result.total).toBe(32419);
    expect(result.average).toBe(15617);
  });
});
