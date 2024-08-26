import { FC } from "react";

export interface ITwoDotsVertical {
  width?: number;
  height?: number;
  strokeColor: string;
  className?: string;
  onClick?: () => void;
}

export const TwoDotsVertical: FC<ITwoDotsVertical> = ({
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
      >
        <circle cx="12" cy="2" r="2" width={10} />
        <circle cx="12" cy="15" r="2" width={10} />
      </svg>
    </button>
  );
};
