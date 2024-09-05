import { FC } from "react";
import { cn } from "../utils/utils";

export interface ICheckmarkSvg {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
}

export const CheckmarkSvg: FC<ICheckmarkSvg> = ({
  width = "14",
  height = "14",
  fill = "#2D44BC",
  className,
}) => {
  return (
    <svg
      className={cn("mt-0.5", className)}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill={fill} />
      <path
        d="M10.4168 13.5833L7.2502 10.4167L5.66687 12L10.4168 16.7499L18.3335 8.83333L16.7502 7.25L10.4168 13.5833Z"
        fill="white"
      />
    </svg>
  );
};
