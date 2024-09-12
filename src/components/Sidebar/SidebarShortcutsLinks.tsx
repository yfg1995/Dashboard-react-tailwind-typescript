import { FC } from "react";
import { TasksSvg } from "../../svg/TasksSvg";
import { ReportsSvg } from "../../svg/ReportsSvg";
import { SettingsSvg } from "../../svg/SettingsSvg";
import { SidebarLink } from "./SidebarLink";
import { useDropdownActiveState } from "../../zustand/useDropdownActiveState";
import { cn } from "../../utils/utils";

export interface ISidebarShortcutsLinks {}

export const SidebarShortcutsLinks: FC<ISidebarShortcutsLinks> = () => {
  const { isActive } = useDropdownActiveState();

  return (
    <div className={cn("lg:mt-8 mb-4 w-full", isActive && "mt-6")}>
      <span
        className={cn(
          "uppercase font-bold text-[var(--clr-text-grey)] hidden select-none lg:block",
          isActive && "block text-sm"
        )}
      >
        shortcuts
      </span>

      <div
        className={cn(
          "text-[var(--clr-text-grey)] [&>*]:flex [&>*]:items-center lg:[&>*]:justify-start [&>*]:gap-2 space-y-2 lg:space-y-3 mt-2 [&>*]:cursor-pointer",
          isActive ? "md:[&>*]:gap-1 md:space-y-1" : "md:[&>*]:justify-center"
        )}
      >
        <SidebarLink title="Tasks" link="/tasks">
          <TasksSvg className={cn(isActive && "md:w-5")} />
        </SidebarLink>

        <SidebarLink title="Reports" link="/reports">
          <ReportsSvg className={cn(isActive && "md:w-5")} />
        </SidebarLink>

        <SidebarLink title="Settings" link="/settings">
          <SettingsSvg className={cn(isActive && "md:w-5")} />
        </SidebarLink>
      </div>
    </div>
  );
};
