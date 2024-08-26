import { FC } from "react";

export interface ITrendingUp {
  width: number;
  height: number;
  strokeColor: string;
}

export const TrendingUp: FC<ITrendingUp> = ({ width, height, strokeColor }) => {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
};
