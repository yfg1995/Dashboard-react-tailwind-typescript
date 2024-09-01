import { FC } from "react";

export interface IPlusCircle {
  width: number;
  height: number;
  fill?: string;
  strokeColor: string;
  className?: string;
  onClick?: () => void;
}

export const PlusCircle: FC<IPlusCircle> = ({
  width,
  height,
  fill,
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
        fill={fill}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={strokeColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  );
};
