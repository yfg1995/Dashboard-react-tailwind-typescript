import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { SmoothedLineChart } from "../SmoothedLineChart";

export interface IDashboardWorkSummary {}

export const DashboardWorkSummary: FC<IDashboardWorkSummary> = () => {
  return (
    <ContainerBorderRounded className="max-w-[1080px] h-[500px]">
      <SmoothedLineChart />
    </ContainerBorderRounded>
  );
};
