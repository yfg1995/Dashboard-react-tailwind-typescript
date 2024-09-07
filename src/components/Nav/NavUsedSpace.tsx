import { FC } from "react";
import { currentDate, currentTime } from "../../helpers/helpers";
import { NavCardBgSvg } from "../../svg/NavCardBgSvg";
import { ProgressBar } from "../ProgressBar";

export interface INavUsedSpace {
  progressNav: number;
}

export const NavUsedSpace: FC<INavUsedSpace> = ({ progressNav }) => {
  return (
    <div className="mt-auto hidden lg:block w-full">
      <div className="relative flex flex-col w-full h-full overflow-hidden rounded-xl p-3">
        <div className="text-sm">Used Space</div>

        <div className="text-xs text-[var(--clr-text-grey)]">
          <div>Admin updated: {currentTime}</div>
          <div>{currentDate}</div>
        </div>

        <div className="absolute top-0 left-0 w-full rounded-lg overflow-hidden -z-10">
          <NavCardBgSvg />
        </div>

        <ProgressBar progress={progressNav} />
      </div>
    </div>
  );
};
