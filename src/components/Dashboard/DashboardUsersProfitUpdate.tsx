import { FC } from "react";
import { cn } from "../../utils/utils";
import { EmblaOptionsType } from "embla-carousel";
import { CarouselAutoplay } from "../CarouselAutoplay";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { UsersProfitUpdate } from "../../dummyData";
import { StepsCompleted } from "../StepsCompleted";
import { Title } from "../Title";
import { CheckmarkSvg } from "../../svg/CheckmarkSvg";
import { TrendingSvg } from "../../svg/TrendingSvg";
import { formatNumberWithCommas } from "../../helpers/helpers";
import { ImageRoundedContent } from "../ImageRoundedContent";

export interface IDashboardUsersProfitUpdates {}

export const DashboardUsersProfitUpdates: FC<
  IDashboardUsersProfitUpdates
> = () => {
  const options: EmblaOptionsType = {
    loop: true,
  };

  return (
    <CarouselAutoplay options={options}>
      {UsersProfitUpdate.map((user) => (
        <ContainerBorderRounded
          className="embla__slide w-full p-0 px-2 bg-brandCharcoalBlack select-none h-[128px]"
          key={user.id}
        >
          <div className="flex items-center justify-between px-4 rounded-[12px] h-full">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <ImageRoundedContent
                  imgSrc={`users/${user.imgSrc}`}
                  altSrc={`User - ${user.profile.userName}`}
                >
                  <div className="flex items-center">
                    <Title title={user.profile.userName} className="mr-2" />

                    {user.profile.verified && <CheckmarkSvg />}
                  </div>

                  <div className="text-brandTextGray text-sm">
                    {user.position}
                  </div>
                </ImageRoundedContent>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-brandTextGray text-sm">
                  {user.tasks.tasksCompleted} from {user.tasks.totalTasks} tasks
                  completed
                </span>

                <StepsCompleted completedTasks={user.tasks.tasksCompleted} />
              </div>
            </div>

            <div className="flex flex-col items-center">
              {user.profit.updatedProfit > 1500 ? (
                <TrendingSvg />
              ) : (
                <TrendingSvg strokeColor="#d42626" className="-scale-y-100" />
              )}

              <div
                className={cn(
                  "font-bold",
                  user.profit.updatedProfit > 1500
                    ? "text-brandGreen"
                    : "text-brandRed"
                )}
              >
                ${formatNumberWithCommas(user.profit.updatedProfit)}
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
    </CarouselAutoplay>
  );
};
