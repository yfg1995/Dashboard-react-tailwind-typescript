import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Title } from "../Title";
import { RocketSvg } from "../../svg/RocketSvg";
import { PlusCircleSvg } from "../../svg/PlusCircleSvg";

export interface IDashboardNewComponent {}

export const DashboardNewComponent: FC<IDashboardNewComponent> = () => {
  return (
    <ContainerBorderRounded className="text-center !p-0 xl:max-w-[530px] min-h-[320px]">
      <div className="w-full h-20 bg-black" />

      <div className="flex flex-col justify-center items-center p-4 -mt-[60px] gap-4 pb-12">
        <div className="w-[80px] h-[80px] rounded-full bg-brandCharcoalGrey">
          <RocketSvg />
        </div>

        <Title title="No Components Created Yet" />

        <div className="text-brandTextGray">
          <div>Simply create your first component</div>
          <div>Just click on the button</div>
        </div>

        <button className="flex items-center gap-4 bg-brandCeruleanBlue rounded-2xl px-3.5 py-2.5">
          <PlusCircleSvg width="24" height="24" strokeColor="white" />
          <span>Add Component</span>
          <span className="bg-[#4964ED] rounded-xl p-1">100</span>
        </button>
      </div>
    </ContainerBorderRounded>
  );
};
