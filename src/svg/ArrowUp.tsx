import { FC } from "react";

export interface IArrowUp {
  width: number;
  height: number;
  strokeColor: string;
  className?: string;
  onClick?: () => void;
}

export const ArrowUp: FC<IArrowUp> = ({
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
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
    </button>
  );
};
