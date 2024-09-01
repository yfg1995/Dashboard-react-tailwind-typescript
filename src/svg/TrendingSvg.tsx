import { FC } from "react";

export interface ITrendingSvg {
  width: number;
  height: number;
  strokeColor: string;
  className?: string;
}

export const TrendingSvg: FC<ITrendingSvg> = ({
  width,
  height,
  strokeColor,
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
};
