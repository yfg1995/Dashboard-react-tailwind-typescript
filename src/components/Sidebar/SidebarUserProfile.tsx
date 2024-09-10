import { FC } from "react";
import { ImageRoundedContent } from "../ImageRoundedContent";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";

export interface ISidebarUserProfile {}

export const SidebarUserProfile: FC<ISidebarUserProfile> = () => {
  return (
    <div className="flex items-center justify-between md:justify-center lg:justify-between w-full px-2 py-4 border-t border-[var(--clr-text-grey)] cursor-pointer">
      <div className="flex items-center justify-center md:gap-0 lg:gap-2 text-[var(--clr-text-grey)] font-bold">
        <ImageRoundedContent imgSrc="users/user.jpg">
          <div className="hidden lg:block">Jerry Wilson</div>
        </ImageRoundedContent>
      </div>

      <TwoDotsVerticalSvg className="md:hidden lg:block" />
    </div>
  );
};
