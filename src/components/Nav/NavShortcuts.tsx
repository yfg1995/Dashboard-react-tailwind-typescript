import { FC } from "react";
import { TasksSvg } from "../../svg/TasksSvg";
import { ReportsSvg } from "../../svg/ReportsSvg";
import { SettingsSvg } from "../../svg/SettingsSvg";

export interface INavShortcuts {}

export const NavShortcuts: FC<INavShortcuts> = () => {
  return (
    <div className="lg:mt-8 mb-4 w-full">
      <span className="uppercase font-bold text-[var(--clr-text-grey)] select-none hidden lg:block">
        shortcuts
      </span>

      <ul className="text-[var(--clr-text-grey)] lg:[&>*]:flex lg:[&>*]:items-center lg:[&>*]:gap-2 space-y-6 lg:space-y-3 mt-6 lg:mt-2 [&>*]:cursor-pointer [&>*]:ease-in-out [&>*]:duration-300">
        <li className="hover:text-white">
          <TasksSvg />
          <div className="hidden lg:block">Tasks</div>
        </li>

        <li className="hover:text-white">
          <ReportsSvg />
          <div className="hidden lg:block">Reports</div>
        </li>

        <li className="hover:text-white">
          <SettingsSvg />
          <div className="hidden lg:block">Settings</div>
        </li>
      </ul>
    </div>
  );
};
