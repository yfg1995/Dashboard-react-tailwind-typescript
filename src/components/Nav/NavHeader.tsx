import { FC, useState } from "react";
import { XCircleSvg } from "../../svg/XCircleSvg";
import { HamburgerSvg } from "../../svg/HamburgerSvg";

export interface INavHeader {}

export const NavHeader: FC<INavHeader> = () => {
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);

  const handleActiveDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };
  return (
    <div className="flex items-center justify-between w-full h-[70px] px-3 border-b border-[var(--clr-text-grey)]">
      <div>Logo</div>

      <div className="md:hidden">
        {activeDropdown ? (
          <button onClick={handleActiveDropdown}>
            <XCircleSvg />
          </button>
        ) : (
          <button onClick={handleActiveDropdown}>
            <HamburgerSvg />
          </button>
        )}
      </div>
    </div>
  );
};
