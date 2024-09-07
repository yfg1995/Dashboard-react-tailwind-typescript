import { FC } from "react";
import { cn } from "../utils/utils";

export interface INotificationCounter {
  numCounter: number;
  className?: string;
}

export const NotificationCounter: FC<INotificationCounter> = ({
  numCounter,
  className,
}) => {
  return (
    <span
      className={cn(
        "flex bg-brandBlue w-5 h-5 items-center justify-center rounded-full mr-2 text-white text-sm pb-[1px]",
        className
      )}
    >
      {numCounter}
    </span>
  );
};
