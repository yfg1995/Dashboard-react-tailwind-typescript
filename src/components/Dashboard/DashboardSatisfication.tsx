import { FC, HTMLAttributes } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Title } from "../Title";
import { TwoDotsVertical } from "../../svg/TwoDotsVertical";
import { SatisficationProgress } from "../SatisficationProgress";

export interface IDashboardSatisfication
  extends HTMLAttributes<HTMLDivElement> {}

export const DashboardSatisfication: FC<IDashboardSatisfication> = (props) => {
  return (
    <div {...props}>
      <ContainerBorderRounded className="h-[var(--c-sec-height)]">
        <div className="flex items-center justify-between mb-2">
          <Title title="Satiscfication" />

          <TwoDotsVertical
            width={12}
            height={12}
            strokeColor="var(--clr-text-grey)"
            className="mt-1.5"
          />
        </div>

        <div className="text-brandTextGray">From all projects</div>

        <SatisficationProgress progress={80} />
      </ContainerBorderRounded>
    </div>
  );
};
