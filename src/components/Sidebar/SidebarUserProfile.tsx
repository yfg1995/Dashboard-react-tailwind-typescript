import { FC } from "react";
import { cn } from "../../utils/utils";
import { ImageRoundedContent } from "../ImageRoundedContent";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";
import { useSidebarActiveState } from "../../zustand/useSidebarActiveState";
import { useProfileActiveState } from "../../zustand/useProfileActiveState";

export interface ISidebarUserProfile {}

export const SidebarUserProfile: FC<ISidebarUserProfile> = () => {
  const { isActive } = useSidebarActiveState();
  const { setIsActive } = useProfileActiveState();

  return (
    <div
      className={cn(
        "flex items-center w-full px-2 py-4 border-t border-[var(--clr-charcoal-grey)] cursor-pointer z-10",
        isActive ? "justify-between" : "justify-center"
      )}
      onClick={() => setIsActive(true)}
    >
      <div className="flex items-center gap-2 text-[var(--clr-charcoal-grey)] font-bold w-full">
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
