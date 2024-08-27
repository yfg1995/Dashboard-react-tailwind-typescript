export const generateRandomUniqueIdNum = (): number => {
  const timestamp = Date.now();
  const randomValue = Math.floor(Math.random() * 1e9);
  return timestamp + randomValue;
};

export const generateRandomUniqueIdStr = (): string =>
  Date.now().toString(36) + Math.random().toString(36).slice(2);

export const formatNumberWithCommas = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
