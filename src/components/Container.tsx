import { FC, PropsWithChildren } from "react";
import { cn } from "../utils/utils";

interface IContainer extends PropsWithChildren {
  className?: string;
}

export const Container: FC<IContainer> = ({ className, children }) => {
  return (
    <div
      className={cn("max-w-[1376px] w-full overflow-hidden m-16", className)}
    >
      {children}
    </div>
  );
};
