import { FC, PropsWithChildren } from "react";
import { cn } from "../utils/utils";

interface IContainer extends PropsWithChildren {
  className?: string;
}

export const Container: FC<IContainer> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "flex justify-center max-w-[1376px] mx-auto w-full overflow-hidden px-[40px] py-16",
        className
      )}
    >
      {children}
    </div>
  );
};
