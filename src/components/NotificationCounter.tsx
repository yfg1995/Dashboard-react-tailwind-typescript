import { FC } from "react";
import { cn } from "../utils/utils";
import { useDropdownActiveState } from "../zustand/useDropdownActiveState";

export interface INotificationCounter {
  numCounter: number | undefined;
  className?: string;
}

export const NotificationCounter: FC<INotificationCounter> = ({
  numCounter,
  className,
}) => {
  const { isActive } = useDropdownActiveState();

  return (
    <div
      className={cn(
        "absolute top-1/2 -translate-y-1/2 lg:top-1/2 left-[94%] lg:left-[87%] font-medium flex bg-brandBlue w-5 h-5 items-center justify-center p-0.5 rounded-full mr-2 text-white text-xs lg:text-sm",
        className,
        isActive ? "md:left-[87%]" : "md:top-2 md:left-[50%]"
      )}
    >
      {numCounter}
    </div>
  );
};
