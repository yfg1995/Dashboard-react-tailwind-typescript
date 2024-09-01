import { FC, HTMLAttributes, useEffect } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Title } from "../Title";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";
import { GaugeProgress } from "../GaugeProgress";
import { SmileySvg } from "../../svg/SmileySvg";
import gsap from "gsap";

export interface IDashboardSatisfaction
  extends HTMLAttributes<HTMLDivElement> {}

export const DashboardSatisfaction: FC<IDashboardSatisfaction> = (props) => {
  const progress = 22.26;

  // useEffect(() => {
  //   gsap.to(".number-counter", {
  //     innerText: progress,
  //     duration: 1,
  //     snap: {
  //       innerText: 0.01,
  //     },
  //   });
  // }, []);

  return (
    <div {...props}>
      <ContainerBorderRounded className="h-[var(--c-lg-height)]">
        <div className="flex items-center justify-between mb-2">
          <Title title="Satisfaction" />

          <TwoDotsVerticalSvg
            width={12}
            height={12}
            strokeColor="var(--clr-text-grey)"
            className="mt-1.5"
          />
        </div>

        <div className="text-brandTextGray">From all projects</div>

        <div className="relative h-full">
          <GaugeProgress progress={progress} />

          <SmileySvg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] z-10" />

          <div className="absolute z-10 bottom-0 left-0 mt-2 text-brandTextGray text-center select-none">
            <div className="flex items-center justify-center gap-16">
              <div className="w-[30px]">0%</div>

              <span className="relative text-lg font-bold text-[var(--clr-cerulean-blue)] text-center">
                <span className="absolute inset-0">
                  <span className="number-counter">0</span>%
                </span>

                <span className="opacity-0 pointer-events-none">
                  <span>100.99</span>%
                </span>
              </span>

              <div className="w-[30px]">100%</div>
            </div>

            <div className="mt-1">Based on likes</div>
          </div>
        </div>
      </ContainerBorderRounded>
    </div>
  );
};
