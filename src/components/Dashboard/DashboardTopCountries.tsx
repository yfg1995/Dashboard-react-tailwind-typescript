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
      if (a.price >= 15000 && b.price < 15000) return -1;
      if (a.price < 15000 && b.price >= 15000) return 1;
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

      <ul className="overflow-y-auto my-4 max-h-[300px] h-full space-y-4">
        {sortedCountries.map((country, index) => (
          <li className={cn(showAll && "mr-3")} key={country.country + index}>
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
                    country.price < 15000
                      ? "var(--clr-red)"
                      : "var(--clr-green)"
                  }
                  className={country.price < 15000 ? "rotate-180" : ""}
                />

                <TwoDotsVerticalSvg />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div
        className="grid place-content-center text-brandTextGray mt-auto cursor-pointer"
        onClick={handleToggle}
      >
        {showAll ? "Show Favorites" : "Show All"}
      </div>
    </ContainerBorderRounded>
  );
};
