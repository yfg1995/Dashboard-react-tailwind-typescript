import { generateRandomUniqueIdStr } from "./helpers/helpers";

export const UsersProfitUpdate = [
  {
    id: generateRandomUniqueIdStr(),
    imgSrc: "/user-1.jpg",
    userName: "Esther Howard",
    position: "Sale's manager USA",
    profit: {
      updatedProfit: 2490.52,
      lastUpdateNum: 6,
    },
    tasks: {
      tasksCompleted: 3,
      totalTasks: 5,
    },
  },
];
