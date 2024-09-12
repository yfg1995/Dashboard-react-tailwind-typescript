import { FC } from "react";
import { ImageRoundedContent } from "../ImageRoundedContent";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";
import { useDropdownActiveState } from "../../zustand/useDropdownActiveState";
import { cn } from "../../utils/utils";

export interface ISidebarUserProfile {}

export const SidebarUserProfile: FC<ISidebarUserProfile> = () => {
  const { isActive } = useDropdownActiveState();

  return (
    <div
      className={cn(
        "flex items-center w-full px-2 py-4 border-t border-[var(--clr-text-grey)] cursor-pointer",
        isActive ? "justify-between" : "justify-center"
      )}
    >
      <div className="flex items-center gap-2 text-[var(--clr-text-grey)] font-bold w-full">
        <ImageRoundedContent imgSrc="users/user.jpg">
          <div className={cn("lg:block", isActive ? "block" : "hidden")}>
            Jerry Wilson
          </div>
        </ImageRoundedContent>
      </div>

      <TwoDotsVerticalSvg
        className={cn("lg:block", isActive ? "block" : "hidden")}
      />
    </div>
  );
};
