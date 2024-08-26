import { FC } from "react";

export interface ITrendingDown {
  width: number;
  height: number;
  strokeColor: string;
}

export const TrendingDown: FC<ITrendingDown> = ({
  width,
  height,
  strokeColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
};
