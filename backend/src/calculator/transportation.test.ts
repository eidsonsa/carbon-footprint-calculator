import {
  MeasureType,
  TransportationFootprintInput,
} from "../generated/graphql";
import {
  calculateFootprintForVehicle,
  calculateTransportationFootprint,
} from "./transportation";

const input: TransportationFootprintInput = {
  vehicles: [
    {
      miles: 1000,
      milesPerGaloon: 21.6,
      measureType: MeasureType.Year,
    },
    {
      miles: 50,
      milesPerGaloon: 21.6,
      measureType: MeasureType.Week,
    },
  ],
};

describe("calculateFootprintForVehicle()", () => {
  it("should calculate the footprint for one vehicle", () => {
    const result = calculateFootprintForVehicle(input.vehicles[0]);
    expect(result).toBe(916);
  });
});

describe("calculateTransportationFootprint()", () => {
  it("should calculate the footprint for multiple vehicles", () => {
    const result = calculateTransportationFootprint(input);
    expect(result.total).toBe(3299);
  });
});
