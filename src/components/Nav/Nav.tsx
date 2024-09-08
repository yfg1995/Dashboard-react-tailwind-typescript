import { FC } from "react";
import { NavHeader } from "./NavHeader";
import { NavGeneralItem } from "./NavGeneralItem";
import { NavLinks } from "./NavLinks";
import { NavShortcutsLinks } from "./NavShortcutsLinks";
import { NavUsedSpace } from "./NavUsedSpace";
import { NavUserProfile } from "./NavUserProfile";

export interface INav {}

export const Nav: FC<INav> = () => {
  const progressNav = 77;

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-brandCharcoalBlack md:pt-[24px] px-2 flex flex-col items-center md:max-w-[80px] lg:max-w-[240px]">
      <NavHeader />

      <div className="flex flex-col items-center lg:items-start h-full w-full md:auto lg:w-full px-1 py-5 overflow-y-auto ">
        <NavGeneralItem />
        <NavLinks />
        <NavShortcutsLinks />

        <NavUsedSpace progressNav={progressNav} />
      </div>

      <NavUserProfile />
    </div>
  );
};
