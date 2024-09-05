import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../utils/utils";

export interface IContainerBorderRounded
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const ContainerBorderRounded: FC<IContainerBorderRounded> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "rounded-[12px] xl:p-4 p-8 overflow-hidden w-full h-full bg-brandCharcoalBlack",
        className
      )}
    >
      {children}
    </div>
  );
};
