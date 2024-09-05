import { FC } from "react";
import { cn } from "../utils/utils";

export interface ITwoDotsVerticalSvg {
  width?: string;
  height?: string;
  strokeColor?: string;
  className?: string;
  onClick?: () => void;
}

export const TwoDotsVerticalSvg: FC<ITwoDotsVerticalSvg> = ({
  width = "12",
  height = "12",
  strokeColor = "var(--clr-text-grey)",
  className,
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      <svg
        className={cn("mt-1.5", className)}
        width={width}
        height={height}
        stroke={strokeColor}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="2" r="2" width={10} />
        <circle cx="12" cy="15" r="2" width={10} />
      </svg>
    </button>
  );
};
