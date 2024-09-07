import { FC, useRef } from "react";
import gsap from "gsap";
import { CircleProgress } from "../helpers/classes";
import { useGSAP } from "@gsap/react";

interface ICircleProgress {
  initialProgress: number;
}

export const CircleProgressComponent: FC<ICircleProgress> = ({
  initialProgress,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!svgRef.current) return;

    const circleProgress = new CircleProgress(svgRef.current, 0);

    gsap.to(circleProgress, {
      progress: initialProgress,
      duration: 1,
      ease: "none",
    });
  }, [svgRef]);

  return (
    <svg
      ref={svgRef}
      width="250"
      height="150"
      viewBox="0 0 280 150"
      className="circle-progress translate-x-[6%]"
    >
      <path
        d="M10,130 C10,-20 240,-20 240,130"
        stroke="#2d2d2d"
        fill="transparent"
        strokeWidth="20"
        strokeLinecap="round"
      />
      <path
        d="M10,130 C10,-20 240,-20 240,130"
        id="circle-path"
        stroke="#2f49d0"
        fill="transparent"
        strokeWidth="20"
        strokeLinecap="round"
      />
      <circle cx="10" cy="100" r="6" id="circle" fill="white" />
      <path
        d="M30,130 C30,7 220,7 220,130"
        stroke="transparent"
        fill="transparent"
        id="inner-circle"
      />
      <g transform="scale(1.1) translate(78.5,60)">
        <svg
          width="19.116114mm"
          height="19.116114mm"
          viewBox="0 0 19.116114 19.116114"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="layer1" transform="translate(-95.557772,-138.94194)">
            <g
              style={{ fill: "none" }}
              id="g1"
              transform="matrix(0.11339286,0,0,0.11339286,65.508668,115.53573)"
            >
              <path
                d="m 349.292,375 c 46.553,0 84.291,-37.739 84.291,-84.292 0,-46.553 -37.738,-84.291 -84.291,-84.291 -46.553,0 -84.292,37.738 -84.292,84.291 0,46.553 37.739,84.292 84.292,84.292 z"
                fill="#ffffff"
                id="path1"
              />
              <path
                d="m 349.292,358.708 c 37.555,0 68,-30.444 68,-68 0,-37.555 -30.445,-68 -68,-68 -37.556,0 -68,30.445 -68,68 0,37.556 30.444,68 68,68 z"
                fill="#d2d6e7"
                id="path2"
              />
              <path
                d="M 347.167,343.833 C 376.898,343.833 401,319.731 401,290 c 0,-29.731 -24.102,-53.833 -53.833,-53.833 -29.732,0 -53.834,24.102 -53.834,53.833 0,29.731 24.102,53.833 53.834,53.833 z"
                fill="#ffe17d"
                id="path3"
              />
              <path
                d="m 347.167,316.482 c -7.471,0 -14.559,-2.859 -18.963,-7.647 -0.813,-0.882 -0.755,-2.255 0.127,-3.067 0.882,-0.812 2.257,-0.755 3.068,0.128 3.597,3.911 9.491,6.245 15.768,6.245 6.276,0 12.171,-2.334 15.768,-6.245 0.81,-0.883 2.186,-0.94 3.068,-0.128 0.882,0.812 0.939,2.185 0.127,3.067 -4.405,4.788 -11.493,7.647 -18.963,7.647 z"
                fill="#aa7346"
                id="path4"
              />
              <path
                d="m 328.933,290 c -2.398,0 -4.341,-1.944 -4.341,-4.341 v -3.473 c 0,-2.398 1.943,-4.342 4.341,-4.342 2.397,0 4.341,1.944 4.341,4.342 v 3.473 c 0,2.397 -1.944,4.341 -4.341,4.341 z"
                fill="#7d5046"
                id="path5"
              />
              <path
                d="m 328.933,277.844 c -0.298,0 -0.588,0.031 -0.869,0.088 v 5.99 c 0,1.439 1.167,2.605 2.605,2.605 1.439,0 2.605,-1.166 2.605,-2.605 v -1.736 c 0,-2.398 -1.943,-4.342 -4.341,-4.342 z"
                fill="#9c6846"
                id="path6"
              />
              <path
                d="m 365.401,290 c -2.398,0 -4.342,-1.944 -4.342,-4.341 v -3.473 c 0,-2.398 1.944,-4.342 4.342,-4.342 2.397,0 4.341,1.944 4.341,4.342 v 3.473 c 0,2.397 -1.944,4.341 -4.341,4.341 z"
                fill="#7d5046"
                id="path7"
              />
              <path
                d="m 365.401,277.844 c -0.298,0 -0.588,0.031 -0.869,0.088 v 5.99 c 0,1.439 1.167,2.605 2.605,2.605 1.439,0 2.605,-1.166 2.605,-2.605 v -1.736 c 0,-2.398 -1.944,-4.342 -4.341,-4.342 z"
                fill="#9c6846"
                id="path8"
              />
              <path
                d="m 354.981,336.019 c -29.731,0 -53.833,-24.102 -53.833,-53.833 0,-12.876 4.525,-24.69 12.065,-33.954 -12.128,9.871 -19.88,24.912 -19.88,41.768 0,29.731 24.102,53.833 53.834,53.833 16.856,0 31.897,-7.752 41.768,-19.88 -9.264,7.54 -21.078,12.066 -33.954,12.066 z"
                fill="#ffd164"
                id="path9"
              />
            </g>
          </g>
        </svg>
      </g>
    </svg>
  );
};
