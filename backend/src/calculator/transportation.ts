import {
  FootprintResult,
  MeasureType,
  TransportationFootprintInput,
  VehicleInfo,
} from "../generated/graphql";

const WEEKS_IN_YEAR = 52;
const CO2_EMITTED_PER_GALOON = 19.6;
const NON_CO2_EMISSIONS_RATIO = 1.01;
const US_EMISSION_AVERAGE = 10484;

const calculateFootprintForVehicle = (info: VehicleInfo): number => {
  const { milesPerGaloon, miles, measureType } = info;

  const milesPerYear =
    measureType === MeasureType.Year ? miles : miles * WEEKS_IN_YEAR;

  return (
    (milesPerYear / milesPerGaloon) *
    CO2_EMITTED_PER_GALOON *
    NON_CO2_EMISSIONS_RATIO
  );
};

export const calculateTransportationFootprint = (
  input: TransportationFootprintInput
): FootprintResult => {
  const { vehicles } = input;
  const vehicleTotal = vehicles.reduce(
    (total, vehicle) => total + calculateFootprintForVehicle(vehicle),
    0
  );
  return {
    average: US_EMISSION_AVERAGE,
    total: Math.round(vehicleTotal),
  };
};
