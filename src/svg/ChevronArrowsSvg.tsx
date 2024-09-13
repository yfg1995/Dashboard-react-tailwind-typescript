import { FC } from "react";
import { cn } from "../utils/utils";

export interface IChevronArrowsSvg {
  width?: string;
  height?: string;
  strokeColor?: string;
  className?: string;
}

export const ChevronArrowsSvg: FC<IChevronArrowsSvg> = ({
  width = "12",
  height = "12",
  strokeColor = "var(--clr-charcoal-grey)",
  className,
}) => {
  return (
    <svg
      className={cn("mt-0.5", className)}
      width={width}
      height={height}
      viewBox="0 0 311 311"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 295L155 156.5L18 16.5M156 295L295 157.5L156.5 17"
        stroke={strokeColor}
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
