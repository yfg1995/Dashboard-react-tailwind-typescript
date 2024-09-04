import { FC, HTMLAttributes, useEffect } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Title } from "../Title";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";
import { CircleProgressComponent } from "../CircleProgress";
import gsap from "gsap";

export interface IDashboardSatisfaction
  extends HTMLAttributes<HTMLDivElement> {}

export const DashboardSatisfaction: FC<IDashboardSatisfaction> = (props) => {
  const decimalProgress = 72.56 * 0.01;
  const progressPercentage = 72.56;

  useEffect(() => {
    gsap.to(".number-counter", {
      innerText: progressPercentage,
      duration: 1,
      snap: {
        innerText: 0.01,
      },
    });
  }, []);

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

        <div className="flex flex-col items-center mt-2.5">
          <CircleProgressComponent initialProgress={decimalProgress} />

          <div className="relative max-w-[260px] w-full text-brandTextGray text-center select-none">
            <div className="flex items-center justify-between">
              <div className="w-[40px] text-right">0%</div>

              <div className="absolute left-1/2 top-0 -translate-x-[48.5%] w-full">
                <span className="relative text-lg font-bold text-[var(--clr-cerulean-blue)] text-center">
                  <span className="absolute inset-0">
                    <span className="number-counter">0</span>%
                  </span>

                  <span className="opacity-0 pointer-events-none">
                    <span>100.99</span>%
                  </span>
                </span>

                <div className="mt-0.5">Based on Likes</div>
              </div>

              <div className="w-[40px] text-right">100%</div>
            </div>
          </div>
        </div>
      </ContainerBorderRounded>
    </div>
  );
};
