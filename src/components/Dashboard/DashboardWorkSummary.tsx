import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";

export interface IDashboardWorkSummary {}

export const DashboardWorkSummary: FC<IDashboardWorkSummary> = () => {
  return (
    <ContainerBorderRounded className="max-w-[1080px]">
      DashboardWorkSummary
    </ContainerBorderRounded>
  );
};
