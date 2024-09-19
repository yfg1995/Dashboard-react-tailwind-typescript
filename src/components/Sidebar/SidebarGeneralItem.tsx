import { FC } from "react";
import { ChevronArrowSvg } from "../../svg/ChevronArrowSvg";
import { MoonSvg } from "../../svg/MoonSvg";

export interface ISidebarGeneralItem {}

export const SidebarGeneralItem: FC<ISidebarGeneralItem> = () => {
  return (
    <div className="bg-[#353535] rounded-xl px-2.5 py-3.5 select-none w-full cursor-pointer hidden lg:block z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MoonSvg />

          <div className="text-sm">
            <div className="font-bold">Sales House</div>
            <div className="text-[var(--clr-charcoal-grey)]">General Item</div>
          </div>
        </div>

        <div>
          <ChevronArrowSvg className="-rotate-90" />
          <ChevronArrowSvg className="rotate-90" />
        </div>
      </div>
    </div>
  );
};
