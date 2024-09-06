import { FC } from "react";

export interface IMoonSvg {}

export const MoonSvg: FC<IMoonSvg> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 101 101"
      fill="none"
    >
      <circle cx="50.25" cy="50.25" r="50.25" fill="white" />
      <circle cx="35.75" cy="34" r="24.25" fill="#2F49D1" />
      <circle cx="73" cy="71.5" r="10.5" fill="#2F49D1" />
    </svg>
  );
};
