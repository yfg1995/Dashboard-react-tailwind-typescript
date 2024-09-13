import { FC } from "react";
import { XCircleSvg } from "../../svg/XCircleSvg";
import { LogoSvg } from "../../svg/LogoSvg";
import { useSidebarActiveState } from "../../zustand/useSidebarActiveState";
import { cn } from "../../utils/utils";
import { BarArrowSvg } from "../../svg/BarArrowSvg";

export interface ISidebarHeader {}

export const SidebarHeader: FC<ISidebarHeader> = () => {
  const { isActive, setIsActive } = useSidebarActiveState();

  const handleIsActive = () => {
    setIsActive(false);
  };

  return (
    <div className="flex z-10 items-center justify-between w-full px-3 py-4 mb-4 border-b border-[var(--clr-text-grey)]">
      <div className="flex items-center gap-2 cursor-pointer">
        <LogoSvg />

        <div
          className={cn(
            "font-bold text-xl lg:block",
            isActive ? "md:block" : "md:hidden"
          )}
        >
          React
        </div>
      </div>

      <button
        className={cn("hidden", isActive && "md:block")}
        onClick={handleIsActive}
      >
        <BarArrowSvg />
      </button>

      <button onClick={handleIsActive} className="md:hidden">
        <XCircleSvg />
      </button>
    </div>
  );
};
