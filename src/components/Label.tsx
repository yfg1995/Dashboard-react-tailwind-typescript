import { FC, PropsWithChildren } from "react";
import { cn } from "../utils/utils";

export interface ILabel extends PropsWithChildren {
  title: string;
  className?: string;
  htmlFor: string;
}

export const Label: FC<ILabel> = ({ title, children, className, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={cn("relative", className)}>
      <span className="absolute -top-[24px] left-0 pl-1 text-white font-medium z-10 text-sm select-none">
        {title}
      </span>

      {children}
    </label>
  );
};
