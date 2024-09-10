import { FC, useRef } from "react";
import gsap from "gsap";
import { CircleProgress } from "../helpers/classes";
import { useGSAP } from "@gsap/react";
import { CircleProgressSmileySvg } from "../svg/CircleProgressSmileySvg";

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

  return <CircleProgressSmileySvg ref={svgRef} />;
};
