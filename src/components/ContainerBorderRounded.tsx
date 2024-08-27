import { FC, PropsWithChildren } from "react";
import { cn } from "../utils/utils";

export interface IContainerBorderRounded extends PropsWithChildren {
  className?: string;
}

export const ContainerBorderRounded: FC<IContainerBorderRounded> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center rounded-[12px] p-4 overflow-hidden w-full bg-brandCharcoalBlack",
        className
      )}
    >
      {children}
    </div>
  );
};
