export const generateRandomUniqueIdNum = (): number => {
  const timestamp = Date.now();
  const randomValue = Math.floor(Math.random() * 1e9);
  return timestamp + randomValue;
};

export const generateRandomUniqueIdStr = (): string =>
  Date.now().toString(36) + Math.random().toString(36).slice(2);
