import { FC } from "react";
import { Search } from "../svg/Search";
import { Input } from "./Input";

export interface ISearchInput {}

export const SearchInput: FC<ISearchInput> = () => {
  return (
    <div className="flex max-w-[220px] w-full">
      <div className="bg-brandCharcoalBlack grid place-items-center rounded-l-lg px-2">
        <Search width="20" height="20" strokeColor="var(--clr-text-grey)" />
      </div>

      <Input
        placeholder="Search"
        id="search-input"
        className="rounded-l-none"
      />
    </div>
  );
};
