import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Title } from "../Title";
import { TwoDotsVertical } from "../../svg/TwoDotsVertical";

export interface IDashboardSegmentation {}

export const DashboardSegmentation: FC<IDashboardSegmentation> = () => {
  return (
    <ContainerBorderRounded className="max-w-[535px]">
      <div className="flex-items-center justify-between">
        <Title title="Segmentation" />

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
