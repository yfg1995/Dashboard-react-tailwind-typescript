import { FC } from "react";
import { DashboardSvg } from "../../svg/DashboardSvg";
import { OverviewSvg } from "../../svg/OverviewSvg";
import { ChatSvg } from "../../svg/ChatSvg";
import { TeamSvg } from "../../svg/TeamSvg";
import { NavLink } from "../NavLink";

export interface INavLinks {}

export const NavLinks: FC<INavLinks> = () => {
  return (
    <div className="text-[var(--clr-text-grey)] [&>*]:flex [&>*]:items-center [&>*]:gap-2 space-y-6 lg:space-y-3 lg:mt-6 [&>*]:cursor-pointer [&>*]:ease-in-out [&>*]:duration-300 w-full">
      <NavLink title="Dashboard">
        <DashboardSvg />
      </NavLink>

      <NavLink title="Overview">
        <OverviewSvg />
      </NavLink>

      <NavLink title="Chat" notificationCounter={7}>
        <ChatSvg />
      </NavLink>

      <NavLink title="Team">
        <TeamSvg />
      </NavLink>
    </div>
  );
};
