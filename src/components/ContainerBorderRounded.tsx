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
        "border border-[#c8d0dd] rounded-[10px] p-10 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};
