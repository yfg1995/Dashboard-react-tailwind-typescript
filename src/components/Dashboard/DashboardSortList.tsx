import { FC } from "react";
import { Reorder } from "framer-motion";
import { cn } from "../../utils/utils";
import { ArrowSvg } from "../../svg/ArrowSvg";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";
import { formatNumberWithCommas } from "../../helpers/helpers";

export interface IDashboardSortList {
  items: any[];
  showAll: boolean;
}

export const DashboardSortList: FC<IDashboardSortList> = ({
  items,
  showAll,
}) => {
  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={() => {}}
      className="overflow-y-auto my-4 h-full space-y-4"
    >
      {items.map((country, index) => (
        <Reorder.Item
          value={country}
          className={cn(showAll && "mr-3")}
          key={country.id}
        >
          <div className="flex items-center justify-between text-brandTextGray">
            <div className="flex items-center gap-2.5">
              <span>{index + 1}</span>

              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img src={`countries/${country.imgSrc}`} alt="" />
              </div>

              <span className="text-brandTextGray">{country.country}</span>
            </div>

            <div className="flex items-center gap-2">
              <span>{formatNumberWithCommas(country.price)}</span>

              <ArrowSvg
                width="16"
                height="16"
                strokeColor={
                  country.price < 10000 ? "var(--clr-red)" : "var(--clr-green)"
                }
                className={country.price < 10000 ? "rotate-180" : ""}
              />

              <TwoDotsVerticalSvg />
            </div>
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
