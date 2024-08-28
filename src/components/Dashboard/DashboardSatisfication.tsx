import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Title } from "../Title";
import { TwoDotsVertical } from "../../svg/TwoDotsVertical";

export interface IDashboardSatisfication {}

export const DashboardSatisfication: FC<IDashboardSatisfication> = () => {
  return (
    <ContainerBorderRounded className="max-w-[535px]">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Satiscfication" />
          <div className="text-brandTextGray">From all projects</div>
        </div>

        <TwoDotsVertical
          width={12}
          height={12}
          strokeColor="var(--clr-text-grey)"
          className="mt-1.5"
        />
      </div>
    </ContainerBorderRounded>
  );
};
