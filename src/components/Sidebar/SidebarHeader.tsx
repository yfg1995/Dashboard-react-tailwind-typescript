import { FC } from "react";
import { XCircleSvg } from "../../svg/XCircleSvg";
import { LogoSvg } from "../../svg/LogoSvg";
import { useDropdownActiveState } from "../../zustand/useDropdownActiveState";

export interface ISidebarHeader {}

export const SidebarHeader: FC<ISidebarHeader> = () => {
  const { setIsActive } = useDropdownActiveState();

  const handleCloseDropdown = () => {
    setIsActive(false);
  };

  return (
    <div className="flex items-center justify-between w-full px-3 py-4 mb-4 border-b border-[var(--clr-text-grey)]">
      <div className="flex items-center gap-2">
        <LogoSvg />
        <div className="font-bold text-xl md:hidden lg:block">React</div>
      </div>

      <button onClick={handleCloseDropdown} className="md:hidden">
        <XCircleSvg />
      </button>
    </div>
  );
};
