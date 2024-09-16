import { TCountriesData, TUserProfitUpdate } from "./helpers/types";

export const UsersProfitUpdate: TUserProfitUpdate[] = [
  {
    id: crypto.randomUUID(),
    imgSrc: "user-1.jpg",
    profile: {
      userName: "Esther Howard",
      verified: true,
    },
    position: "Sale's manager USA",
    profit: {
      updatedProfit: 2490.52,
      lastUpdateNum: 3,
    },
    tasks: {
      tasksCompleted: 3,
      totalTasks: 15,
    },
  },
  {
    id: crypto.randomUUID(),
    imgSrc: "user-2.jpg",
    profile: {
      userName: "Eleanor Pena",
      verified: false,
    },
    position: "Sale's manager Europe",
    profit: {
      updatedProfit: 490.52,
      lastUpdateNum: 6,
    },
    tasks: {
      tasksCompleted: 1,
      totalTasks: 5,
    },
  },
  {
    id: crypto.randomUUID(),
    imgSrc: "user-3.jpg",
    profile: {
      userName: "Robert Fox",
      verified: true,
    },
    position: "Sale's manager Asia",
    profit: {
      updatedProfit: 22490.52,
      lastUpdateNum: 12,
    },
    tasks: {
      tasksCompleted: 5,
      totalTasks: 5,
    },
  },
  {
    id: crypto.randomUUID(),
    imgSrc: "user-1.jpg",
    profile: {
      userName: "Esther Howard",
      verified: true,
    },
    position: "Sale's manager USA",
    profit: {
      updatedProfit: 2490.52,
      lastUpdateNum: 3,
    },
    tasks: {
      tasksCompleted: 3,
      totalTasks: 5,
    },
  },
  {
    id: crypto.randomUUID(),
    imgSrc: "user-2.jpg",
    profile: {
      userName: "Eleanor Pena",
      verified: false,
    },
    position: "Sale's manager Europe",
    profit: {
      updatedProfit: 490.52,
      lastUpdateNum: 6,
    },
    tasks: {
      tasksCompleted: 1,
      totalTasks: 5,
    },
  },
  {
    id: crypto.randomUUID(),
    imgSrc: "user-3.jpg",
    profile: {
      userName: "Robert Fox",
      verified: true,
    },
    position: "Sale's manager Asia",
    profit: {
      updatedProfit: 22490.52,
      lastUpdateNum: 12,
    },
    tasks: {
      tasksCompleted: 5,
      totalTasks: 5,
    },
  },
];

export const countriesData: TCountriesData[] = [
  {
    id: "country-1",
    country: "USA",
    profit: true,
    price: 21547.24,
    imgSrc: "usa-flag.jpg",
  },
  {
    id: "country-2",
    country: "Ireland",
    profit: false,
    price: 9547.24,
    imgSrc: "ireland-flag.jpg",
  },
  {
    id: "country-3",
    country: "Ukraine",
    profit: false,
    price: 6547.24,
    imgSrc: "ukraine-flag.jpg",
  },
  {
    id: "country-4",
    country: "Sweden",
    profit: true,
    price: 12547.24,
    imgSrc: "sweden-flag.jpg",
  },
  {
    id: "country-5",
    country: "USA",
    profit: false,
    price: 1547.24,
    imgSrc: "usa-flag.jpg",
  },
  {
    id: "country-6",
    country: "Ireland",
    profit: false,
    price: 7547.24,
    imgSrc: "ireland-flag.jpg",
  },
  {
    id: "country-7",
    country: "Ukraine",
    profit: true,
    price: 12547.24,
    imgSrc: "ukraine-flag.jpg",
  },
  {
    id: "country-8",
    country: "Sweden",
    profit: true,
    price: 7597.24,
    imgSrc: "sweden-flag.jpg",
  },
  {
    id: "country-9",
    country: "USA",
    profit: false,
    price: 17588.24,
    imgSrc: "usa-flag.jpg",
  },
  {
    id: "country-10",
    country: "Ireland",
    profit: true,
    price: 9007.24,
    imgSrc: "ireland-flag.jpg",
  },
  {
    id: "country-11",
    country: "Ukraine",
    profit: false,
    price: 6425.24,
    imgSrc: "ukraine-flag.jpg",
  },
  {
    id: "country-12",
    country: "Sweden",
    profit: true,
    price: 2547.24,
    imgSrc: "sweden-flag.jpg",
  },
];
