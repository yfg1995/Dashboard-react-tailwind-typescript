import { FC, HTMLAttributes } from "react";
import { Star } from "../../svg/Star";
import { ChevronArrows } from "../../svg/ChevronArrows";
import { SearchInput } from "../SearchInput";
import { day, month } from "../../helpers/helpers";

export interface IDashboardUserHeader extends HTMLAttributes<HTMLDivElement> {}

export const DashboardUserHeader: FC<IDashboardUserHeader> = (props) => {
  return (
    <div
      className="flex items-center justify-between h-[var(--c-sm-height)]"
      {...props}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="font-bold text-3xl">Hello David</div>

          <div className="flex items-center gap-2 rounded-xl p-2 bg-brandCharcoalBlack">
            <Star width="16" height="16" fill="var(--clr-yellow)" />

            <div className="font-bold uppercase text-brandYellow">premium</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ChevronArrows
            width="12"
            height="12"
            strokeColor="var(--clr-text-grey)"
            className="mt-0.5"
          />

          <div className="text-brandTextGray">
            {day} {month}
          </div>
        </div>
      </div>

      <SearchInput />
    </div>
  );
};
