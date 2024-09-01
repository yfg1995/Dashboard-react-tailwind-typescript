import { FC } from "react";
import { SearchSvg } from "../svg/SearchSvg";
import { Input } from "./Input";

export interface ISearchInput {}

export const SearchInput: FC<ISearchInput> = () => {
  return (
    <div className="flex max-w-[220px] w-full relative">
      <SearchSvg
        width="20"
        height="20"
        strokeColor="var(--clr-text-grey)"
        className="absolute left-[10px] top-1/2 -translate-y-[40%]"
      />

      <Input placeholder="Search" id="search-input" className="pl-10" />
    </div>
  );
};
