import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { UsersProfitUpdate } from "../../dummyData";
import { Checkmark } from "../../svg/Checkmark";
import { TrendingUp } from "../../svg/TrendingUp";
import { TrendingDown } from "../../svg/TrendingDown";
import { cn } from "../../utils/utils";

export interface IDashboardUsersProfitUpdates {}

export const DashboardUsersProfitUpdates: FC<
  IDashboardUsersProfitUpdates
> = () => {
  return (
    <>
      {UsersProfitUpdate.map((user) => (
        <ContainerBorderRounded
          className="p-3 h-32 max-w-[330px] bg-brandCharcoalBlack border-none"
          key={user.id}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <div className="flex items-center overflow-hidden w-10 h-10 rounded-full mr-2">
                  <img src={user.imgSrc} alt={`Username - ${user.userName}`} />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="text-white font-bold mr-2">
                      {user.userName}
                    </div>

                    <Checkmark
                      className="mt-1"
                      width={14}
                      height={14}
                      fill="#2D44BC"
                    />
                  </div>

                  <div className="text-brandTextGray text-sm">
                    {user.position}
                  </div>
                </div>
              </div>

              <div>
                <span className="text-brandTextGray text-sm">
                  {user.tasks.tasksCompleted} from {user.tasks.totalTasks} tasks
                  completed
                </span>

                <div></div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              {user.profit.updatedProfit > 1500 ? (
                <TrendingUp width={30} height={30} strokeColor="#3ca643" />
              ) : (
                <TrendingDown width={30} height={30} strokeColor="#d42626" />
              )}

              <div
                className={cn(
                  "font-bold",
                  user.profit.updatedProfit > 1500
                    ? "text-brandGreen"
                    : "text-brandRed"
                )}
              >
                ${user.profit.updatedProfit}
              </div>

              <div className="text-brandTextGray text-sm">
                Last{" "}
                {user.profit.lastUpdateNum === 12
                  ? 1
                  : user.profit.lastUpdateNum}{" "}
                {user.profit.lastUpdateNum === 12 ? "year" : "months"}
              </div>
            </div>
          </div>
        </ContainerBorderRounded>
      ))}
    </>
  );
};
