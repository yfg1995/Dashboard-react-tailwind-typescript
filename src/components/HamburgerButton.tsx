import { FC } from "react";
import { useSidebarActiveState } from "../zustand/useSidebarActiveState";
import { HamburgerSvg } from "../svg/HamburgerSvg";
import { cn } from "../utils/utils";

export interface IHamburgerButton {
  className?: string;
}

export const HamburgerButton: FC<IHamburgerButton> = ({ className }) => {
  const { setIsActive } = useSidebarActiveState();

  const handleCloseDropdown = () => {
    setIsActive(true);
  };

  return (
    <button
      onClick={handleCloseDropdown}
      className={cn(
        "md:hidden ml-auto p-2 rounded-full bg-[#1e1e1e] border-[var(--clr-charcoal-grey)] border-2 aspect-square w-12 z-[2]",
        className
      )}
    >
      <HamburgerSvg />
    </button>
  );
};
