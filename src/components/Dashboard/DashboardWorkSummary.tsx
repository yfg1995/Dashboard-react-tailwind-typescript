import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { SmoothedLineChart } from "../SmoothedLineChart";
import { Title } from "../Title";
import { GradientCircle } from "../../svg/GradientCircle";
import { QuestionMarkCircle } from "../../svg/QuestionMarkCircle";

export interface IDashboardWorkSummary {}

export const DashboardWorkSummary: FC<IDashboardWorkSummary> = () => {
  return (
    <ContainerBorderRounded className="max-w-[1080px]">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Your Work Summary" />
          <div className="text-brandTextGray">Nov - July</div>
        </div>

        <div className="flex items-center gap-4">
          <GradientCircle width={16} height={16} />
          <span>Last 9 months</span>
          <QuestionMarkCircle width={20} height={20} strokeColor="#fff" />
        </div>
      </div>

      <SmoothedLineChart />
    </ContainerBorderRounded>
  );
};
