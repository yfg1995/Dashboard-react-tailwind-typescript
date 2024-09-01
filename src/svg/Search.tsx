import { FC } from "react";

export interface ISearch {
  width: string;
  height: string;
  className?: string;
  strokeColor: string;
}

export const Search: FC<ISearch> = ({
  width,
  height,
  className,
  strokeColor = "#343434",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 285 284"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="186.58"
        y1="185.562"
        x2="270.375"
        y2="269.358"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="105.75"
        cy="105.25"
        r="95.25"
        stroke={strokeColor}
        strokeWidth="2"
      />
    </svg>
  );
};
