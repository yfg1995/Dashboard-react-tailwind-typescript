import { FC } from "react";
import { XCircleSvg } from "../../svg/XCircleSvg";
import { LogoSvg } from "../../svg/LogoSvg";
import { useSidebarActiveState } from "../../zustand/useSidebarActiveState";
import { cn } from "../../utils/utils";

export interface ISidebarHeader {}

export const SidebarHeader: FC<ISidebarHeader> = () => {
  const { isActive, setIsActive } = useSidebarActiveState();

  const handleIsActive = () => {
    setIsActive(false);
  };

  return (
    <div className="flex z-10 items-center justify-between w-full px-3 py-4 mb-4 border-b border-[var(--clr-charcoal-grey)]">
      <div className="flex items-center gap-2 cursor-pointer z-10">
        <LogoSvg />

        <div
          className={cn(
            "font-bold text-xl lg:block z-10",
            isActive ? "md:block" : "md:hidden"
          )}
        >
          React
        </div>
      </div>

      <button onClick={handleIsActive} className="md:hidden z-10">
        <XCircleSvg />
      </button>
    </div>
  );
};
