import { FC } from "react";

type TStepsCompleted = {
  completedTasks: number;
  totalTasks: number;
};

export const StepsCompleted: FC<TStepsCompleted> = ({
  completedTasks,
  totalTasks,
}) => {
  const stepWidth = 100 / totalTasks;

  return (
    <div className="flex w-full">
      {[...Array(totalTasks)].map((_, index) => {
        return (
          <div
            key={index}
            className={`h-[5px] ${
              index < completedTasks
                ? "bg-[var(--clr-blue)]"
                : "bg-brandTextGray"
            } mx-0.5 ${
              index === 0
                ? "rounded-l-full"
                : index === totalTasks - 1
                ? "rounded-r-full"
                : ""
            } `}
            style={{ width: `${stepWidth}%` }}
          />
        );
      })}
    </div>
  );
};
