import { FC } from "react";

export interface IGradientCircleSvg {
  width: string;
  height: string;
  className?: string;
}

export const GradientCircleSvg: FC<IGradientCircleSvg> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 158 159"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="79.0899"
        cy="79.6808"
        r="63.8298"
        stroke="url(#paint0_linear)"
        strokeWidth="30"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="13.6001"
          y1="15.8511"
          x2="13.6001"
          y2="145.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6B8DE3" />
          <stop offset="1" stopColor="#7D1C8D" />
        </linearGradient>
      </defs>
    </svg>
  );
};
