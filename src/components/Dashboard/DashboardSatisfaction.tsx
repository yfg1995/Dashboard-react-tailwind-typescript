import { FC, HTMLAttributes, useEffect, useState } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Title } from "../Title";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";
import { GaugeProgress } from "../GaugeProgress";
import { SmileySvg } from "../../svg/SmileySvg";
import { CircleProgressComponent } from "../CircleProgress";

export interface IDashboardSatisfaction
  extends HTMLAttributes<HTMLDivElement> {}

export const DashboardSatisfaction: FC<IDashboardSatisfaction> = (props) => {
  const decimalProgress = 72.56 * 0.01;
  const progressPercentage = 72.56;
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   if (svgRef.current) {
  //     const circleProgress = new CircleProgress(
  //       svgRef.current,
  //       initialProgress
  //     );

  //     gsap.to(circleProgress, {
  //       progress: initialProgress,
  //       duration: 0.6,
  //       ease: "none",
  //       delay: 0.5,
  //       onUpdate: () => {
  //         circleProgress._progress = circleProgress.progress;
  //       },
  //     });
  //   }
  // }, [progress, initialProgress]);

  return (
    <div {...props}>
      <ContainerBorderRounded className="h-[var(--c-lg-height)]">
        <div className="flex items-center justify-between mb-2">
          <Title title="Satisfaction" />

          <TwoDotsVerticalSvg
            width="12"
            height="12"
            strokeColor="var(--clr-text-grey)"
            className="mt-1.5"
          />
        </div>

        <div className="text-brandTextGray">From all projects</div>

        <div className="flex flex-col items-center">
          {/* <GaugeProgress progress={progress} /> */}
          {/* <SmileySvg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] z-10" /> */}

          <CircleProgressComponent initialProgress={decimalProgress} />

          <div className="relative max-w-[260px] w-full text-brandTextGray text-center select-none">
            <div className="flex items-center justify-between">
              <div className="w-[40px] text-right">0%</div>

              <div className="absolute left-1/2 top-0 -translate-x-[48.5%] w-full">
                <div className="text-lg text-brandCeruleanBlue font-bold">
                  {progressPercentage}%
                </div>

                <div>Based on likes</div>
              </div>

              <div className="w-[40px] text-right">100%</div>
            </div>
          </div>
        </div>
      </ContainerBorderRounded>
    </div>
  );
};
