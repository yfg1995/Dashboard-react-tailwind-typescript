import { FC } from "react";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarGeneralItem } from "./SidebarGeneralItem";
import { SidebarLinks } from "./SidebarLinks";
import { SidebarShortcutsLinks } from "./SidebarShortcutsLinks";
import { SidebarUsedSpace } from "./SidebarUsedSpace";
import { SidebarUserProfile } from "./SidebarUserProfile";
import { useDropdownActiveState } from "../../zustand/useDropdownActiveState";
import { BarArrowSvg } from "../../svg/BarArrowSvg";
import { cn } from "../../utils/utils";

export interface ISidebar {}

const progress = 77;

export const Sidebar: FC<ISidebar> = () => {
  const { isActive, setIsActive } = useDropdownActiveState();

  const handleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-10 w-full bg-brandCharcoalBlack px-4 md:px-2 md:flex flex-col items-center md:max-w-[80px] lg:max-w-[240px]",
        isActive ? "flex md:max-w-[240px]" : "hidden"
      )}
    >
      <SidebarHeader />

      <SidebarGeneralItem />

      <div
        className={cn(
          "flex flex-col items-center lg:items-start h-full w-[calc(100%_+_1rem)] pl-4 md:pl-0 lg:pl-2 py-2 overflow-y-auto",
          isActive && "md:py-0 md:pl-4"
        )}
      >
        <SidebarLinks />
        <SidebarShortcutsLinks />
      </div>

      <button
        className={cn(
          "place-content-center w-full mb-4 hidden md:flex lg:hidden",
          isActive && "md:hidden"
        )}
        onClick={handleSidebar}
      >
        <BarArrowSvg className="rotate-180" />
      </button>

      <SidebarUsedSpace progress={progress} />

      <SidebarUserProfile />
    </div>
  );
};
