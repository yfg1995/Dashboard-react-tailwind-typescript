import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { SmoothedLineChart } from "../SmoothedLineChart";
import { Title } from "../Title";
import { GradientCircleSvg } from "../../svg/GradientCircleSvg";
import { QuestionMarkCircleSvg } from "../../svg/QuestionMarkCircleSvg";
import Tippy from "@tippyjs/react";

export interface IDashboardWorkSummary {}

export const DashboardWorkSummary: FC<IDashboardWorkSummary> = () => {
  return (
    <ContainerBorderRounded className="xl:max-w-[1088px] h-[320px]">
      <div className="flex justify-between items-start">
        <div>
          <Title title="Your Work Summary" />
          <div className="text-brandTextGray">Nov - July</div>
        </div>

        <div className="flex items-center gap-4 mt-[3px]">
          <GradientCircleSvg />

          <span>Last 9 months</span>

          <Tippy
            placement="right"
            animation="scale"
            content={
              <div className="bg-brandCharcoalGrey px-3 py-2 rounded-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus reiciendis quo minus non et tempora, praesentium
                corrupti.
              </div>
            }
          >
            <span>
              <QuestionMarkCircleSvg />
            </span>
          </Tippy>
        </div>
      </div>

      <SmoothedLineChart />
    </ContainerBorderRounded>
  );
};
