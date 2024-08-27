import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { UsersProfitUpdate } from "../../dummyData";
import { Checkmark } from "../../svg/Checkmark";
import { TrendingUp } from "../../svg/TrendingUp";
import { TrendingDown } from "../../svg/TrendingDown";
import { cn } from "../../utils/utils";
import { StepsCompleted } from "../StepsCompleted";
import { Title } from "../Title";
import { EmblaOptionsType } from "embla-carousel";
import { CarouselAutoplay } from "../CarouselAutoplay";

export interface IDashboardUsersProfitUpdates {}

export const DashboardUsersProfitUpdates: FC<
  IDashboardUsersProfitUpdates
> = () => {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
  };
  const slideCount = UsersProfitUpdate.length;

  return (
    <CarouselAutoplay options={OPTIONS}>
      {UsersProfitUpdate.map(
        (user, index) =>
          index < slideCount && (
            <ContainerBorderRounded className="embla__slide" key={user.id}>
              <div className="flex-items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex-items-center">
                    <div className="flex-items-center overflow-hidden w-10 h-10 rounded-full mr-2">
                      <img
                        src={`users/${user.imgSrc}`}
                        alt={`User - ${user.profile.userName}`}
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex-items-center">
                        <Title title={user.profile.userName} className="mr-2" />

                        {user.profile.verified && (
                          <Checkmark
                            className="mt-0.5"
                            width={14}
                            height={14}
                            fill="#2D44BC"
                          />
                        )}
                      </div>

                      <div className="text-brandTextGray text-sm">
                        {user.position}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-brandTextGray text-sm">
                      {user.tasks.tasksCompleted} from {user.tasks.totalTasks}{" "}
                      tasks completed
                    </span>

                    <StepsCompleted
                      completedTasks={user.tasks.tasksCompleted}
                      totalTasks={user.tasks.totalTasks}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  {user.profit.updatedProfit > 1500 ? (
                    <TrendingUp width={30} height={30} strokeColor="#51b045" />
                  ) : (
                    <TrendingDown
                      width={30}
                      height={30}
                      strokeColor="#d42626"
                    />
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
          )
      )}
    </CarouselAutoplay>
  );
};
