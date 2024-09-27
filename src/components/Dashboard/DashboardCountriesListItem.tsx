import { cn } from "../../utils/utils";
import { formatNumberWithCommas } from "../../helpers/helpers";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";
import { ArrowSvg } from "../../svg/ArrowSvg";
import { TSortableData } from "../Sortable/Sortable";
import { TCountriesData } from "../../helpers/types";

export interface IDashboardCountriesListItem {
  index: number;
  item: TCountriesData;
}

export const DashboardCountriesListItem = ({
  item,
  index,
}: IDashboardCountriesListItem) => {
  const { country, imgSrc, price, profit } = item;

  return (
    <div className="relative flex items-center justify-between text-brandTextGray">
      <div className="flex items-center gap-2.5">
        <span className="w-6 text-right">{index + 1}</span>

        <div className="w-6 h-6 rounded-full overflow-hidden">
          <img src={`countries/${imgSrc}`} alt={`${country}`} />
        </div>

        <span className="text-brandTextGray">{country}</span>
      </div>

      <div className="absolute right-2 flex items-center gap-2">
        <span>{formatNumberWithCommas(price ?? 0)}</span>

        <ArrowSvg
          width="16"
          height="16"
          strokeColor={profit ? "var(--clr-red)" : "var(--clr-green)"}
          className={cn(profit && "rotate-180")}
        />

        <TwoDotsVerticalSvg />
      </div>
    </div>
  );
};
