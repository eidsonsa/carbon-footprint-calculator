export const getLabel = (key: string): string => {
  return (key.charAt(0).toUpperCase() + key.slice(1)).replace(
    /([a-z])([A-Z])/g,
    "$1 $2"
  );
};

export const ensureIsPositive = (value: number): number => {
  return value < 0 ? 0 : value;
};
