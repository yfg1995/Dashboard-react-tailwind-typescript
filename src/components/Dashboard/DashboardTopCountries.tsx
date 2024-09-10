import { FC, useState } from "react";
import { Title } from "../Title";
import { PlusCircleSvg } from "../../svg/PlusCircleSvg";
import { ArrowSvg } from "../../svg/ArrowSvg";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";
import { formatNumberWithCommas } from "../../helpers/helpers";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { cn } from "../../utils/utils";
import { CountriesData } from "../../helpers/types";
import { countriesData } from "../../dummyData";
import { SortTextArrow } from "../SortTextArrow";
import { DashboardSortList } from "./DashboardSortList";

export interface IDashboardTopCountries {}

export const DashboardTopCountries: FC<IDashboardTopCountries> = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isSortedByProfit, setIsSortedByProfit] = useState<boolean>(false);
  const [isSortedByPrice, setIsSortedByPrice] = useState<boolean>(false);

  const displayedCountries = showAll
    ? countriesData
    : countriesData.slice(0, 4);

  const sortByProfit = (countries: CountriesData[]) => {
    return countries.sort((a, b) => {
      if (a.price >= 10000 && b.price < 10000) return -1;
      if (a.price < 10000 && b.price >= 10000) return 1;
      return 0;
    });
  };

  const sortByPrice = (countries: CountriesData[]) => {
    return countries.sort((a, b) => b.price - a.price);
  };

  const handleSortingProfit = () => {
    if (isSortedByProfit) {
      setIsSortedByProfit(false);
      setIsSortedByPrice(false);
    } else {
      setIsSortedByProfit(true);
      setIsSortedByPrice(false);
    }
  };

  const handleSortingPrice = () => {
    if (isSortedByPrice) {
      setIsSortedByPrice(false);
      setIsSortedByProfit(false);
    } else {
      setIsSortedByPrice(true);
      setIsSortedByProfit(false);
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
  };

  return (
    <ContainerBorderRounded className="flex flex-col h-[320px] xl:max-w-[350px] 2xl:max-w-[530px]">
      <div className="flex justify-between">
        <Title title="Top Countries" />

        <PlusCircleSvg />
      </div>

      <div className="mt-1 text-brandTextGray transition-all">
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

      <DashboardSortList items={sortedCountries} showAll={showAll} />

      <div
        className="grid place-content-center text-brandTextGray mt-auto cursor-pointer select-none"
        onClick={handleToggle}
      >
        {showAll ? "Show Favorites" : "Show All"}
      </div>
    </ContainerBorderRounded>
  );
};
