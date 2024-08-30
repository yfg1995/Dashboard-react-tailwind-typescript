import { FC } from "react";
import { cn } from "../utils/utils";

export interface IChevronArrow {
  strokeColor: string;
  className?: string;
  width: string;
  height: string;
}

export const ChevronArrow: FC<IChevronArrow> = ({
  strokeColor,
  className,
  width,
  height,
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={strokeColor}
      className={cn("transition-all", className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};
