import { FC } from "react";

export interface IChevronArrows {
  width: string;
  height: string;
  className?: string;
  strokeColor: string;
}

export const ChevronArrows: FC<IChevronArrows> = ({
  width,
  height,
  className,
  strokeColor,
}) => {
  return (
    <svg
      className={className}
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
