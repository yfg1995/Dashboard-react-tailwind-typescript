import { FC } from "react";
import { DashboardSvg } from "../../svg/DashboardSvg";
import { OverviewSvg } from "../../svg/OverviewSvg";
import { ChatSvg } from "../../svg/ChatSvg";
import { NotificationCounter } from "../NotificationCounter";
import { TeamSvg } from "../../svg/TeamSvg";

export interface INavLinks {}

export const NavLinks: FC<INavLinks> = () => {
  return (
    <ul className="text-[var(--clr-text-grey)] lg:[&>*]:flex lg:[&>*]:items-center lg:[&>*]:gap-2 space-y-6 lg:space-y-3 lg:mt-6 [&>*]:cursor-pointer [&>*]:ease-in-out [&>*]:duration-300 w-full">
      <li className="hover:text-white">
        <DashboardSvg />
        <div className="hidden lg:block">Dashboard</div>
      </li>

      <li className="hover:text-white">
        <OverviewSvg />
        <div className="hidden lg:block">Overview</div>
      </li>

      <li className="hover:text-white">
        <ChatSvg />

        <div className="flex items-center justify-between w-full">
          <div className="hidden lg:block">Chat</div>
          <NotificationCounter numCounter={7} />
        </div>
      </li>

      <li className="hover:text-white">
        <TeamSvg />
        <div className="hidden lg:block">Team</div>
      </li>
    </ul>
  );
};
