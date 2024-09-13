export type TUserProfitUpdate = {
  id: string;
  imgSrc: string;
  profile: {
    userName: string;
    verified: boolean;
  };
  position: string;
  profit: {
    updatedProfit: number;
    lastUpdateNum: number;
  };
  tasks: {
    tasksCompleted: number;
    totalTasks: number;
  };
};

export type TCountriesData = {
  id: string;
  country: string;
  price: number;
  profit: boolean;
  imgSrc: string;
};
