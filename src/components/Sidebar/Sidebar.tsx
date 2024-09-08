import { FC } from "react";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarGeneralItem } from "./SidebarGeneralItem";
import { SidebarLinks } from "./SidebarLinks";
import { SidebarShortcutsLinks } from "./SidebarShortcutsLinks";
import { SidebarUsedSpace } from "./SidebarUsedSpace";
import { SidebarUserProfile } from "./SidebarUserProfile";

export interface ISidebar {}

export const Sidebar: FC<ISidebar> = () => {
  const progress = 77;

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-brandCharcoalBlack md:pt-[24px] px-2 flex flex-col items-center md:max-w-[80px] lg:max-w-[240px]">
      <SidebarHeader />

      <div className="flex flex-col items-center lg:items-start h-full w-full md:auto lg:w-full px-1 py-5 overflow-y-auto ">
        <SidebarGeneralItem />
        <SidebarLinks />
        <SidebarShortcutsLinks />

        <SidebarUsedSpace progressNav={progress} />
      </div>

      <SidebarUserProfile />
    </div>
  );
};
