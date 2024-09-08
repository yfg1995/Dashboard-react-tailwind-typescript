import { FC } from "react";
import { cn } from "../utils/utils";

export interface INotificationCounter {
  numCounter: number | undefined;
  className?: string;
}

export const NotificationCounter: FC<INotificationCounter> = ({
  numCounter,
  className,
}) => {
  return (
    <div
      className={cn(
        "absolute top-1/2 -translate-y-1/2 lg:left-[90%] flex bg-brandBlue w-5 h-5 md:w-4 md:h-4 text-xs lg:w-5 lg:h-5 items-center justify-center rounded-full mr-2 text-white lg:text-sm pb-[1px]",
        className
      )}
    >
      {numCounter}
    </div>
  );
};
