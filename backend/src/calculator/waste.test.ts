import { WasteFootprintInput, WasteType } from "../generated/graphql";
import { calculateWasteFootprint } from "./waste";

describe("calculateWasteFootprint()", () => {
  it("should calculate the waste footprint", () => {
    const input: WasteFootprintInput = {
      homeQuantity: 1,
      recicled: [WasteType.Aluminum, WasteType.Plastic],
    };

    const result = calculateWasteFootprint(input);
    expect(result.average).toBe(692);
    expect(result.total).toBe(567);
  });

  it("should return total equal to average when no waste is recicled", () => {
    const input: WasteFootprintInput = {
      homeQuantity: 1,
      recicled: [],
    };

    const result = calculateWasteFootprint(input);
    expect(result.total).toBe(result.average);
  });

  it("should multiply the result by the home quantity", () => {
    const input1: WasteFootprintInput = {
      homeQuantity: 1,
      recicled: [WasteType.Aluminum, WasteType.Plastic],
    };
    const result1 = calculateWasteFootprint(input1);

    const input2 = { ...input1, homeQuantity: 2 };
    const result2 = calculateWasteFootprint(input2);

    expect(result2.total).toBe(result1.total * 2);
    expect(result2.average).toBe(result1.average * 2);
  });
});
