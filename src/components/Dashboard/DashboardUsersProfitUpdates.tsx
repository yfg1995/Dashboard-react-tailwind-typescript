import { FC, useEffect } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { UsersProfitUpdate } from "../../dummyData";
import { Checkmark } from "../../svg/Checkmark";
import { TrendingUp } from "../../svg/TrendingUp";
import { TrendingDown } from "../../svg/TrendingDown";
import { cn } from "../../utils/utils";
import { StepsCompleted } from "../StepsCompleted";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

export interface IDashboardUsersProfitUpdates {}

export const DashboardUsersProfitUpdates: FC<
  IDashboardUsersProfitUpdates
> = () => {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);
  const itemsToShow = 3;

  useEffect(() => {
    let controls;
    const finalPosition = -width * 0.5 - itemsToShow;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div>
      <motion.div
        className="flex items-center gap-10 w-full"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {UsersProfitUpdate.map(
          (user, index) =>
            index < itemsToShow && (
              <ContainerBorderRounded
                className={`p-3 h-32 bg-brandCharcoalBlack border-none w-${
                  100 / itemsToShow
                }%`}
                key={user.id}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <div className="flex items-center overflow-hidden w-10 h-10 rounded-full mr-2">
                        <img
                          src={user.imgSrc}
                          alt={`Username - ${user.profile.userName}`}
                        />
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <div className="text-white font-bold mr-2">
                            {user.profile.userName}
                          </div>

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
                      <TrendingUp
                        width={30}
                        height={30}
                        strokeColor="#51b045"
                      />
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
      </motion.div>
    </div>
  );
};
