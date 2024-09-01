import { FC, HTMLAttributes } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Title } from "../Title";
import { TwoDotsVertical } from "../../svg/TwoDotsVertical";
import { GaugeProgress } from "../GaugeProgress";
import { Smiley } from "../../svg/Smiley";

export interface IDashboardSatisfaction
  extends HTMLAttributes<HTMLDivElement> {}

export const DashboardSatisfaction: FC<IDashboardSatisfaction> = (props) => {
  return (
    <div {...props}>
      <ContainerBorderRounded className="h-[var(--c-lg-height)]">
        <div className="flex items-center justify-between mb-2">
          <Title title="Satisfaction" />

          <TwoDotsVertical
            width={12}
            height={12}
            strokeColor="var(--clr-text-grey)"
            className="mt-1.5"
          />
        </div>

        <div className="text-brandTextGray">From all projects</div>

        <div className="relative h-full">
          <GaugeProgress progress={70.36} />
          <Smiley className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] z-10" />
        </div>
      </ContainerBorderRounded>
    </div>
  );
};
