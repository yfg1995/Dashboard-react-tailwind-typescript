import { FC } from "react";
import { ImageRoundedContent } from "../ImageRoundedContent";
import { TwoDotsVerticalSvg } from "../../svg/TwoDotsVerticalSvg";

export interface INavUserProfile {}

export const NavUserProfile: FC<INavUserProfile> = () => {
  return (
    <div className="flex items-center justify-between w-full px-2 py-4 border-t border-[var(--clr-text-grey)]">
      <div className="flex items-center justify-center gap-2 text-[var(--clr-text-grey)] font-bold">
        <ImageRoundedContent imgSrc="users/user.jpg">
          <div className="hidden lg:block">Jerry Wilson</div>
        </ImageRoundedContent>
      </div>

      <TwoDotsVerticalSvg className="hidden lg:block mt-0" />
    </div>
  );
};
