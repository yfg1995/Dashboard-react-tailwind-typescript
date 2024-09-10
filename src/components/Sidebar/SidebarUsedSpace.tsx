import { FC } from "react";
import { currentDate, currentTime } from "../../helpers/helpers";
import { NavCardBgSvg } from "../../svg/NavCardBgSvg";
import { ProgressBar } from "../ProgressBar";

export interface ISidebarUsedSpace {
  progress: number;
}

export const SidebarUsedSpace: FC<ISidebarUsedSpace> = ({ progress }) => {
  return (
    <div className="mt-auto hidden lg:block w-full overflow-hidden shrink-0">
      <div className="relative rounded-xl p-3">
        <div className="absolute inset-0 w-full -z-10">
          <NavCardBgSvg />
        </div>

        <div className="text-sm">Used Space</div>

        <div className="text-xs text-[var(--clr-text-grey)]">
          <div>Admin updated: {currentTime}</div>
          <div>{currentDate}</div>
        </div>

        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};
