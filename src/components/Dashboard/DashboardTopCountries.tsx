import { FC, useState } from "react";
import { Title } from "../Title";
import { PlusCircleSvg } from "../../svg/PlusCircleSvg";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { CountriesData } from "../../helpers/types";
import { countriesData } from "../../dummyData";
import { SortTextArrow } from "../SortTextArrow";
import { DashboardSortList } from "./DashboardSortList";

export interface IDashboardTopCountries {}

export const DashboardTopCountries: FC<IDashboardTopCountries> = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isSortedByProfit, setIsSortedByProfit] = useState<boolean>(false);
  const [isSortedByPrice, setIsSortedByPrice] = useState<boolean>(false);
  const [descendingOrder, setDescendingOrder] = useState<boolean>(false);

  const displayedCountries = showAll
    ? countriesData
    : countriesData.slice(0, 4);

  const sortByProfit = (countries: CountriesData[]) => {
    const sorted = countries.sort((a, b) => {
      if (a.price >= 10000 && b.price < 10000) return -1;
      if (a.price < 10000 && b.price >= 10000) return 1;
      return 0;
    });
    return descendingOrder ? sorted.reverse() : sorted;
  };

  const sortByPrice = (countries: CountriesData[]) => {
    const sorted = countries.sort((a, b) => b.price - a.price);
    return descendingOrder ? sorted.reverse() : sorted;
  };

  const handleSortingProfit = () => {
    if (isSortedByProfit) {
      setDescendingOrder(!descendingOrder);
    } else {
      setIsSortedByProfit(true);
      setIsSortedByPrice(false);
      setDescendingOrder(false);
    }
  };

  const handleSortingPrice = () => {
    if (isSortedByPrice) {
      setDescendingOrder(!descendingOrder);
    } else {
      setIsSortedByPrice(true);
      setIsSortedByProfit(false);
      setDescendingOrder(false);
    }
  };

  const sortedCountries = isSortedByProfit
    ? sortByProfit([...displayedCountries])
    : isSortedByPrice
    ? sortByPrice([...displayedCountries])
    : [...displayedCountries];

  const handleToggle = () => {
    setShowAll(!showAll);
    setIsSortedByPrice(false);
    setIsSortedByProfit(false);
    setDescendingOrder(false);
  };

  return (
    <ContainerBorderRounded className="flex flex-col min-h-[320px] xl:max-w-[350px] 2xl:max-w-[530px]">
      <div className="flex justify-between">
        <Title title="Top Countries" />

        <PlusCircleSvg />
      </div>

      <div className="mt-1 text-brandTextGray">
        {showAll ? (
          <div className="flex items-center gap-3">
            <div>Sort by:</div>

            <SortTextArrow
              title="Profit"
              isSorted={isSortedByProfit}
              onClick={handleSortingProfit}
            />
            <SortTextArrow
              title="Price"
              isSorted={isSortedByPrice}
              onClick={handleSortingPrice}
            />
          </div>
        ) : (
          "Favorites"
        )}
      </div>

      <DashboardSortList items={sortedCountries} />

      <div
        className="text-center text-brandTextGray mt-auto cursor-pointer select-none"
        onClick={handleToggle}
      >
        {showAll ? "Show Favorites" : "Show All"}
      </div>
    </ContainerBorderRounded>
  );
};
