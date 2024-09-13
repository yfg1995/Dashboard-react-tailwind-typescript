import { FC } from "react";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarGeneralItem } from "./SidebarGeneralItem";
import { SidebarLinks } from "./SidebarLinks";
import { SidebarShortcutsLinks } from "./SidebarShortcutsLinks";
import { SidebarUsedSpace } from "./SidebarUsedSpace";
import { SidebarUserProfile } from "./SidebarUserProfile";
import { useSidebarActiveState } from "../../zustand/useSidebarActiveState";
import { BarArrowSvg } from "../../svg/BarArrowSvg";
import { cn } from "../../utils/utils";
import { AnimatePresence, motion } from "framer-motion";

export interface ISidebar {}

const progress = 77;

export const Sidebar: FC<ISidebar> = () => {
  const { isActive, setIsActive } = useSidebarActiveState();

  const handleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-full h-screen bg-brandCharcoalBlack px-3 md:px-2 md:flex flex-col items-center md:max-w-[80px] lg:max-w-[240px]",
        isActive ? "flex md:max-w-[240px]" : "hidden"
      )}
    >
      <AnimatePresence>
        {isActive && (
          <>
            <motion.div
              onClick={() => setIsActive(false)}
              className="fixed left-0 md:left-[240px] w-full h-screen cursor-pointer"
              style={{ backdropFilter: "blur(10px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>

      <SidebarHeader />

      <SidebarGeneralItem />

      <div
        className={cn(
          "flex flex-col items-center lg:items-start w-[calc(100%_+_1rem)] pl-4 md:pl-0 lg:pl-2 overflow-y-auto lg:my-4 z-10",
          isActive && "md:pl-4"
        )}
      >
        <SidebarLinks />
        <SidebarShortcutsLinks />
      </div>

      <div className="flex flex-col mt-auto w-full">
        <button
          className={
            "place-content-center w-full mb-4 hidden md:flex lg:hidden z-10 px-2"
          }
          onClick={handleSidebar}
        >
          <BarArrowSvg className={cn(isActive ? "ml-auto" : "rotate-180")} />
        </button>

        <SidebarUsedSpace progress={progress} />

        <SidebarUserProfile />
      </div>
    </div>
  );
};
