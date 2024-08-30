import { FC } from "react";

export interface IQuestionMarkCircle {
  width: number;
  height: number;
  strokeColor: string;
  className?: string;
  fill?: string;
}

export const QuestionMarkCircle: FC<IQuestionMarkCircle> = ({
  width,
  height,
  strokeColor,
  fill = "#333",
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={strokeColor}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      />
    </svg>
  );
};
