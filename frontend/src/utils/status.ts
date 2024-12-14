export type FootprintStatus = "positive" | "negative";

export const getFootprintStatus = ({
  total,
  average,
}: {
  total: number;
  average: number;
}): FootprintStatus => {
  return total > average ? "negative" : "positive";
};
