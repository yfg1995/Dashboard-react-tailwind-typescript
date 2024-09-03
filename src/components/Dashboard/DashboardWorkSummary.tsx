import { FC, HTMLAttributes } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { SmoothedLineChart } from "../SmoothedLineChart";
import { Title } from "../Title";
import { GradientCircleSvg } from "../../svg/GradientCircleSvg";
import { QuestionMarkCircleSvg } from "../../svg/QuestionMarkCircleSvg";
import Tippy from "@tippyjs/react";

export interface IDashboardWorkSummary extends HTMLAttributes<HTMLDivElement> {}

export const DashboardWorkSummary: FC<IDashboardWorkSummary> = (props) => {
  return (
    <div {...props}>
      <ContainerBorderRounded className="h-[var(--c-lg-height)]">
        <div className="flex justify-between items-start">
          <div>
            <Title title="Your Work Summary" />
            <div className="text-brandTextGray">Nov - July</div>
          </div>

          <div className="flex items-center gap-4 mt-[3px]">
            <GradientCircleSvg width="16" height="16" className="mt-0.5" />

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
                <QuestionMarkCircleSvg
                  width="22"
                  height="22"
                  strokeColor="var(--clr-charcoal-grey)"
                />
              </span>
            </Tippy>
          </div>
        </div>

        <SmoothedLineChart />
      </ContainerBorderRounded>
    </div>
  );
};
