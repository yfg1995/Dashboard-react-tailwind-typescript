import { FC } from "react";
import { cn } from "../utils/utils";

export interface ITasksSvg {
  className?: string;
}

export const TasksSvg: FC<ITasksSvg> = ({ className }) => {
  return (
    <svg
      className={cn(
        "w-6 h-6 md:w-8 md:h-8 lg:w-5 lg:h-5 mt-0.5 ease-in-out duration-300",
        className
      )}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 14H7V12H17V14Z"></path>
    </svg>
  );
};
