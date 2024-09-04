import { FC } from "react";
import { StarSvg } from "../../svg/StarSvg";
import { ChevronArrowsSvg } from "../../svg/ChevronArrowsSvg";
import { SearchInput } from "../SearchInput";
import { currentDay, currentMonth } from "../../helpers/helpers";

export interface IDashboardUserHeader {}

export const DashboardUserHeader: FC<IDashboardUserHeader> = () => {
  return (
    <div className="flex items-end justify-between pb-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="font-bold text-3xl">Hello David</div>

          <div className="flex items-center gap-2 rounded-xl p-2 bg-brandCharcoalBlack">
            <StarSvg width="16" height="16" fill="var(--clr-yellow)" />

            <div className="font-bold uppercase text-brandYellow">premium</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ChevronArrowsSvg
            width="12"
            height="12"
            strokeColor="var(--clr-text-grey)"
            className="mt-[3px]"
          />

          <div className="text-brandTextGray">
            {currentDay} {currentMonth}
          </div>
        </div>
      </div>

      <SearchInput />
    </div>
  );
};
