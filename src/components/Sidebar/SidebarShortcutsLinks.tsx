import { FC } from "react";
import { TasksSvg } from "../../svg/TasksSvg";
import { ReportsSvg } from "../../svg/ReportsSvg";
import { SettingsSvg } from "../../svg/SettingsSvg";
import { SidebarLink } from "./SidebarLink";

export interface ISidebarShortcutsLinks {}

export const SidebarShortcutsLinks: FC<ISidebarShortcutsLinks> = () => {
  return (
    <div className="lg:mt-8 mb-4 w-full">
      <span className="uppercase font-bold text-[var(--clr-text-grey)] select-none hidden lg:block">
        shortcuts
      </span>

      <div className="text-[var(--clr-text-grey)] [&>*]:flex [&>*]:items-center [&>*]:gap-2 space-y-6 lg:space-y-3 mt-6 lg:mt-2 [&>*]:cursor-pointer [&>*]:ease-in-out [&>*]:duration-300">
        <SidebarLink title="Tasks" link="/tasks">
          <TasksSvg />
        </SidebarLink>

        <SidebarLink title="Reports" link="/reports">
          <ReportsSvg />
        </SidebarLink>

        <SidebarLink title="Settings" link="/settings">
          <SettingsSvg />
        </SidebarLink>
      </div>
    </div>
  );
};
