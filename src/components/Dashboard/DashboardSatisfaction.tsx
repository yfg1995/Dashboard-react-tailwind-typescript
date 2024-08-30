import { FC, HTMLAttributes } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Title } from "../Title";
import { TwoDotsVertical } from "../../svg/TwoDotsVertical";
import { SatisfactionProgress } from "../SatisfactionProgress";

export interface IDashboardSatisfaction
  extends HTMLAttributes<HTMLDivElement> {}

export const DashboardSatisfaction: FC<IDashboardSatisfaction> = (props) => {
  return (
    <div {...props}>
      <ContainerBorderRounded className="h-[var(--c-sec-height)]">
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

        <SatisfactionProgress progress={80} />
      </ContainerBorderRounded>
    </div>
  );
};
