import {
  FootprintResult,
  WasteFootprintInput,
  WasteType,
} from "../generated/graphql";

const WASTE_FOOTPRINT_AVERAGE_PER_PERSON = 692;

const poundsRecicledByType: Record<WasteType, number> = {
  aluminum: 89,
  plastic: 36,
  glass: 25,
  newspaper: 113,
  magazines: 27,
};

export const calculateWasteFootprint = (
  input: WasteFootprintInput
): FootprintResult => {
  const { homeQuantity, recicled } = input;

  const recicledAmount = recicled.reduce(
    (total, type) => total + poundsRecicledByType[type],
    0
  );

  return {
    average: homeQuantity * WASTE_FOOTPRINT_AVERAGE_PER_PERSON,
    total: homeQuantity * (WASTE_FOOTPRINT_AVERAGE_PER_PERSON - recicledAmount),
  };
};
