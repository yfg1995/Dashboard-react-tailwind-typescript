import { FC } from "react";
import { StarSvg } from "../../svg/StarSvg";
import { ChevronArrowsSvg } from "../../svg/ChevronArrowsSvg";
import { SearchInput } from "../SearchInput";
import { currentDay, currentMonth } from "../../helpers/helpers";

export interface IDashboardUserHeader {}

export const DashboardUserHeader: FC<IDashboardUserHeader> = () => {
  return (
    <div className="flex gap-4 justify-between flex-col md:flex-row md:items-end">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="font-bold text-3xl">Hello David</div>

          <div className="flex items-center gap-2 rounded-xl p-2 bg-brandCharcoalBlack">
            <StarSvg />

            <div className="font-bold uppercase text-brandYellow">premium</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ChevronArrowsSvg />

          <div className="text-brandTextGray">
            {currentDay} {currentMonth}
          </div>
        </div>
      </div>

      <SearchInput />
    </div>
  );
};
