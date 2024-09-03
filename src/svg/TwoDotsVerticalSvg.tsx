import { FC } from "react";

export interface ITwoDotsVerticalSvg {
  width?: string;
  height?: string;
  strokeColor: string;
  className?: string;
  onClick?: () => void;
}

export const TwoDotsVerticalSvg: FC<ITwoDotsVerticalSvg> = ({
  width,
  height,
  strokeColor,
  className,
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      <svg
        className={className}
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
