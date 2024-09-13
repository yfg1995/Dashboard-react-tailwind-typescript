import _ from "lodash";
import { useMemo, useState } from "react";
import { Title } from "../Title";
import { PlusCircleSvg } from "../../svg/PlusCircleSvg";
import { SortTextArrow } from "../SortTextArrow";
import { TCountriesData } from "../../helpers/types";
import { SortableList } from "./SortableList";

export type SortableData = TCountriesData;

export interface ISortable<T extends Partial<SortableData>> {
  data: T[];
  keysToSortBy?: Array<keyof T>;
  title: string;
}

export const Sortable = <T extends Partial<SortableData>>({
  data,
  keysToSortBy,
  title,
}: ISortable<T>) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [descendingOrder, setDescendingOrder] = useState<boolean>(false);
  const [currentKey, setCurrentKey] = useState<string>();

  const displayedData = useMemo(() => {
    return showAll ? data : data.slice(0, 4);
  }, [showAll, data]);

  const sortByObjectKey = () => {
    if (!currentKey) return [];
    const sorted = _.sortBy(displayedData, currentKey);
    return descendingOrder ? [...sorted].reverse() : sorted;
  };

  const handleSorting = (objectKey: string) => {
    setDescendingOrder(!descendingOrder);
    setCurrentKey(objectKey);
  };

  const sortedData = Boolean(currentKey)
    ? sortByObjectKey()
    : [...displayedData];

  const handleToggle = () => {
    setShowAll(!showAll);
    setDescendingOrder(false);
  };

  return (
    <>
      <div className="flex justify-between">
        <Title title={title} />

        <PlusCircleSvg />
      </div>

      <div className="mt-1 text-brandTextGray">
        {showAll ? (
          <div className="flex items-center gap-3">
            <div>Sort by:</div>

            {keysToSortBy?.map((key) => (
              <SortTextArrow
                key={String(key)}
                title={String(key)[0].toUpperCase() + String(key).slice(1)}
                onClick={() => handleSorting(String(key))}
              />
            ))}
          </div>
        ) : (
          "Favorites"
        )}
      </div>

      <SortableList items={sortedData} />

      <div
        className="text-center text-brandTextGray mt-auto cursor-pointer select-none"
        onClick={handleToggle}
      >
        {showAll ? "Show Favorites" : "Show All"}
      </div>
    </>
  );
};
