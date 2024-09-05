import { FC } from "react";
import { cn } from "../utils/utils";

export interface IChevronArrowSvg {
  width?: string;
  height?: string;
  strokeColor?: string;
  className?: string;
}

export const ChevronArrowSvg: FC<IChevronArrowSvg> = ({
  width = "16",
  height = "16",
  strokeColor = "var(--clr-text-grey)",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={strokeColor}
      className={cn("transition-all mt-0.5", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};
