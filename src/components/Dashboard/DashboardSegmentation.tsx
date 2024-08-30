import { FC, HTMLAttributes } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Title } from "../Title";
import { TwoDotsVertical } from "../../svg/TwoDotsVertical";

export interface IDashboardSegmentation
  extends HTMLAttributes<HTMLDivElement> {}

export const DashboardSegmentation: FC<IDashboardSegmentation> = (props) => {
  return (
    <div {...props}>
      <ContainerBorderRounded className="h-[var(--c-sec-height)]">
        <div className="flex items-center justify-between">
          <Title title="Segmentation" />

          <TwoDotsVertical
            width={12}
            height={12}
            strokeColor="var(--clr-text-grey)"
            className="mt-1.5"
          />
        </div>

        <div className="text-brandTextGray mb-3">All users</div>

        <ul className="[&>*]:flex [&>*]:items-center [&>*]:justify-between [&>*]:relative [&>*]:space-y-4">
          <li>
            <div className="text-[#363636]">Not Specified</div>

            <div className="flex items-center gap-4 mr-24">
              <span className="text-[#363636]">800</span>
              <div className="w-12 h-0.5 bg-brandTextGray" />
              <div className="absolute top-0 right-0 w-20 h-28 rounded-lg overflow-hidden bg-[#363636]" />
            </div>
          </li>

          <li>
            <div className="text-[#818BB1]">Male</div>

            <div className="flex items-center gap-4 mr-24">
              <span className="text-[#818BB1]">441</span>
              <div className="w-12 h-0.5 bg-brandTextGray" />
              <div className="absolute top-0 right-0 w-20 h-28 rounded-lg overflow-hidden bg-[#818BB1]" />
            </div>
          </li>

          <li>
            <div className="text-[#2C365D]">Female</div>

            <div className="flex items-center gap-4 mr-24">
              <span className="text-[#2C365D]">233</span>
              <div className="w-12 h-0.5 bg-brandTextGray" />
              <div className="absolute top-0 right-0 w-20 h-28 rounded-lg overflow-hidden bg-[#2C365D]" />
            </div>
          </li>

          <li>
            <div className="text-brandBlue">Other</div>

            <div className="flex items-center gap-4 mr-24">
              <span className="text-brandBlue">126</span>
              <div className="w-12 h-0.5 bg-brandTextGray" />
              <div className="absolute top-0 right-0 w-20 h-28 rounded-lg overflow-hidden bg-brandBlue" />
            </div>
          </li>
        </ul>
      </ContainerBorderRounded>
    </div>
  );
};
