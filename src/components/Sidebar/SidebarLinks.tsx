import { FC } from "react";
import { DashboardSvg } from "../../svg/DashboardSvg";
import { OverviewSvg } from "../../svg/OverviewSvg";
import { ChatSvg } from "../../svg/ChatSvg";
import { TeamSvg } from "../../svg/TeamSvg";
import { SidebarLink } from "../SidebarLink";

export interface ISidebarLinks {}

export const SidebarLinks: FC<ISidebarLinks> = () => {
  return (
    <div className="text-[var(--clr-text-grey)] [&>*]:flex [&>*]:items-center [&>*]:gap-2 space-y-6 lg:space-y-3 lg:mt-6 [&>*]:cursor-pointer [&>*]:ease-in-out [&>*]:duration-300 w-full">
      <SidebarLink title="Dashboard">
        <DashboardSvg />
      </SidebarLink>

      <SidebarLink title="Overview">
        <OverviewSvg />
      </SidebarLink>

      <SidebarLink title="Chat" notificationCounter={7}>
        <ChatSvg />
      </SidebarLink>

      <SidebarLink title="Team">
        <TeamSvg />
      </SidebarLink>
    </div>
  );
};
