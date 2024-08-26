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
        const isComplete = index < completedTasks;
        const isLastComplete =
          index === completedTasks - 1 && completedTasks === totalTasks;
        const stepClass = isComplete
          ? isLastComplete
            ? "bg-gradient-to-r from-purple-600 to-blue-400"
            : "bg-purple-600"
          : "bg-gray-600";

        return (
          <div
            key={index}
            className={`h-[5px] ${stepClass} mx-0.5 ${
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
