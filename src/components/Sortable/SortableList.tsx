import { Reorder } from "framer-motion";
import { ArrowSvg } from "../../svg/ArrowSvg";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";
import { formatNumberWithCommas } from "../../helpers/helpers";
import { SortableData } from "../Sortable/Sortable";

export interface ISortableList<T extends Partial<SortableData>> {
  items: T[];
}

export const SortableList = <T extends Partial<SortableData>>({
  items,
}: ISortableList<T>) => {
  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={() => {}}
      className="overflow-y-auto my-4 h-full space-y-4"
    >
      {items.map((country, index) => (
        <Reorder.Item
          drag={false}
          value={country}
          key={country.id}
          style={{ originX: "0px" }}
        >
          <div className="relative flex items-center justify-between text-brandTextGray">
            <div className="flex items-center gap-2.5">
              <span className="w-6 text-right">{index + 1}</span>

              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img
                  src={`countries/${country.imgSrc}`}
                  alt={`${country.country}`}
                />
              </div>

              <span className="text-brandTextGray">{country.country}</span>
            </div>

            <div className="absolute right-2 flex items-center gap-2">
              <span>{formatNumberWithCommas(country.price ?? 0)}</span>

              <ArrowSvg
                width="16"
                height="16"
                strokeColor={
                  country.profit ? "var(--clr-red)" : "var(--clr-green)"
                }
                className={country.profit ? "rotate-180" : ""}
              />

              <TwoDotsVerticalSvg />
            </div>
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
