import { FC } from "react";

export interface IPlusSvg {
  width: number;
  height: number;
  className?: string;
  strokeColor: string;
}

export const PlusSvg: FC<IPlusSvg> = ({
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
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={strokeColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};
