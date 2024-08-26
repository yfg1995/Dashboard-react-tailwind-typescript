import { FC } from "react";

export interface IArrowDown {
  width: number;
  height: number;
  strokeColor: string;
  className?: string;
  onClick?: () => void;
}

export const ArrowDown: FC<IArrowDown> = ({
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
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={strokeColor}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    </button>
  );
};
