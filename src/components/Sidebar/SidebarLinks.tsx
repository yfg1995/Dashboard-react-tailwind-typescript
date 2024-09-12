import { FC } from "react";
import { DashboardSvg } from "../../svg/DashboardSvg";
import { OverviewSvg } from "../../svg/OverviewSvg";
import { ChatSvg } from "../../svg/ChatSvg";
import { TeamSvg } from "../../svg/TeamSvg";
import { SidebarLink } from "./SidebarLink";
import { useSidebarActiveState } from "../../zustand/useSidebarActiveState";
import { cn } from "../../utils/utils";

export interface ISidebarLinks {}

export const SidebarLinks: FC<ISidebarLinks> = () => {
  const { isActive } = useSidebarActiveState();

  return (
    <div
      className={cn(
        "text-[var(--clr-text-grey)] [&>*]:flex [&>*]:items-center lg:[&>*]:justify-start space-y-2 [&>*]:gap-2 lg:space-y-3 [&>*]:cursor-pointer w-full",
        isActive ? "md:[&>*]:gap-1 md:space-y-1" : "md:[&>*]:justify-center"
      )}
    >
      <SidebarLink title="Dashboard" link="/">
        <DashboardSvg className={cn(isActive && "md:w-5")} />
      </SidebarLink>

      <SidebarLink title="Overview" link="/overview">
        <OverviewSvg className={cn(isActive && "md:w-5")} />
      </SidebarLink>

      <SidebarLink title="Chat" notificationCounter={7} link="/chat">
        <ChatSvg className={cn(isActive && "md:w-5")} />
      </SidebarLink>

      <SidebarLink title="Team" link="/team">
        <TeamSvg className={cn(isActive && "md:w-5")} />
      </SidebarLink>
    </div>
  );
};
