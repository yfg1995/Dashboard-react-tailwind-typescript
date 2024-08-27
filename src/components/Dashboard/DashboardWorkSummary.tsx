import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { SmoothedLineChart } from "../SmoothedLineChart";
import { Title } from "../Title";

export interface IDashboardWorkSummary {}

export const DashboardWorkSummary: FC<IDashboardWorkSummary> = () => {
  return (
    <ContainerBorderRounded className="max-w-[1080px]">
      <Title title="Your Work Summary" />
      <SmoothedLineChart />
    </ContainerBorderRounded>
  );
};
