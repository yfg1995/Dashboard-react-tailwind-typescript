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

const date = new Date();
export const currentDay = date.getDate();
const optionsDate: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "2-digit",
};
const optionsTime: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
};
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const currentDate = date.toLocaleDateString("en-US", optionsDate);
export const currentMonth = monthNames[date.getMonth()];
export const currentYear = date.getFullYear();
export const currentTime = date.toLocaleTimeString("en-US", optionsTime);
