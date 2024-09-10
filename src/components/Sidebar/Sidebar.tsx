import { FC } from "react";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarGeneralItem } from "./SidebarGeneralItem";
import { SidebarLinks } from "./SidebarLinks";
import { SidebarShortcutsLinks } from "./SidebarShortcutsLinks";
import { SidebarUsedSpace } from "./SidebarUsedSpace";
import { SidebarUserProfile } from "./SidebarUserProfile";
import { useDropdownActiveState } from "../../zustand/useDropdownActiveState";
import { BarArrowSvg } from "../../svg/BarArrowSvg";

export interface ISidebar {}

export const Sidebar: FC<ISidebar> = () => {
  const { isActive } = useDropdownActiveState();

  const progress = 77;

  return (
    <div
      className={`fixed inset-y-0 left-0 z-10 w-full bg-brandCharcoalBlack px-4 md:px-2 md:flex flex-col items-center md:max-w-[80px] lg:max-w-[240px] ${
        isActive ? "flex" : "hidden"
      }`}
    >
      <SidebarHeader />

      <SidebarGeneralItem />

      <div className="flex flex-col items-center lg:items-start h-full w-[calc(100%_+_1rem)] pl-4 md:pl-2 py-5 mb-4 overflow-y-auto">
        <SidebarLinks />
        <SidebarShortcutsLinks />
      </div>

      <button className="place-content-center w-full mb-4 hidden md:flex lg:hidden">
        <BarArrowSvg className="rotate-180" />
      </button>

      <SidebarUsedSpace progress={progress} />

      <SidebarUserProfile />
    </div>
  );
};
