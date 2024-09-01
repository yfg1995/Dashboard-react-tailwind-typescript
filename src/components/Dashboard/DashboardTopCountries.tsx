import { FC, HTMLAttributes, useState } from "react";
import { Title } from "../Title";
import { PlusCircleSvg } from "../../svg/PlusCircleSvg";
import { countries } from "../../dummyData";
import { ArrowSvg } from "../../svg/ArrowSvg";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";
import { formatNumberWithCommas } from "../../helpers/helpers";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { cn } from "../../utils/utils";

export interface IDashboardTopCountries
  extends HTMLAttributes<HTMLDivElement> {}

export const DashboardTopCountries: FC<IDashboardTopCountries> = (props) => {
  const [showAll, setShowAll] = useState(false);

  const displayedCountries = showAll ? countries : countries.slice(0, 4);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div {...props}>
      <ContainerBorderRounded className="flex flex-col h-[var(--c-lg-height)]">
        <div className="flex justify-between">
          <div>
            <Title title="Top Countries" />
            <div
              className={cn(
                "text-brandTextGray transition-all",
                showAll ? "opacity-0" : "opacity-100"
              )}
            >
              Favorites
            </div>
          </div>

          <PlusCircleSvg
            width={22}
            height={22}
            strokeColor="white"
            fill="#333"
          />
        </div>

        <ul className="overflow-y-auto mt-4 max-h-[300px] h-full space-y-4">
          {displayedCountries.map((country, index) => (
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
                    width={16}
                    height={16}
                    strokeColor={
                      country.price < 15000
                        ? "var(--clr-red)"
                        : "var(--clr-green)"
                    }
                    className={country.price < 15000 ? "rotate-180" : ""}
                  />

                  <TwoDotsVerticalSvg
                    width={12}
                    height={12}
                    strokeColor="var(--clr-text-grey)"
                    className="mt-1.5"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div
          className="grid place-content-center text-brandTextGray mt-auto cursor-pointer"
          onClick={handleToggle}
        >
          {showAll ? "Show Less" : "Show All"}
        </div>
      </ContainerBorderRounded>
    </div>
  );
};
