import { FC, HTMLAttributes } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { SmoothedLineChart } from "../SmoothedLineChart";
import { Title } from "../Title";
import { GradientCircle } from "../../svg/GradientCircle";
import { QuestionMarkCircle } from "../../svg/QuestionMarkCircle";
import Tippy from "@tippyjs/react";

export interface IDashboardWorkSummary extends HTMLAttributes<HTMLDivElement> {}

export const DashboardWorkSummary: FC<IDashboardWorkSummary> = (props) => {
  return (
    <div {...props}>
      <ContainerBorderRounded className="h-[var(--c-sec-height)]">
        <div className="flex items-center justify-between">
          <div>
            <Title title="Your Work Summary" />
            <div className="text-brandTextGray">Nov - July</div>
          </div>

          <div className="flex items-center gap-4">
            <GradientCircle width={16} height={16} className="mt-0.5" />

            <span>Last 9 months</span>

            <Tippy
              placement="right"
              animation="scale"
              delay={[200, 200]}
              content={
                <div className="bg-brandTextGray px-3 py-2 rounded-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ducimus reiciendis quo minus non et tempora, praesentium
                  corrupti.
                </div>
              }
            >
              <span>
                <QuestionMarkCircle width={20} height={20} strokeColor="#fff" />
              </span>
            </Tippy>
          </div>
        </div>

        <SmoothedLineChart />
      </ContainerBorderRounded>
    </div>
  );
};
