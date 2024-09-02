import { FC, HTMLAttributes } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Title } from "../Title";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";
import { GaugeProgress } from "../GaugeProgress";
import { SmileySvg } from "../../svg/SmileySvg";

export interface IDashboardSatisfaction
  extends HTMLAttributes<HTMLDivElement> {}

export const DashboardSatisfaction: FC<IDashboardSatisfaction> = (props) => {
  const progress = 22.26;

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

        <div className="relative h-full flex flex-col items-center justify-center">
          <GaugeProgress progress={progress} />

          <SmileySvg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] z-10" />

          <div className="absolute z-10 top-[53%] left-1/2 -translate-x-[49%]  max-w-[300px] w-full mt-2 text-brandTextGray text-center select-none">
            <div className="flex items-center justify-between">
              <div className="w-[40px]">0%</div>

              <div className="w-[40px]">100%</div>
            </div>

            <div className="mt-3">Based on likes</div>
          </div>
        </div>
      </ContainerBorderRounded>
    </div>
  );
};
