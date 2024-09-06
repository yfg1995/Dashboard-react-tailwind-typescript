import { FC, useState } from "react";
import { XCircleSvg } from "../svg/XCircleSvg";
import { HamburgerSvg } from "../svg/HamburgerSvg";
import { MoonSvg } from "../svg/Nav/MoonSvg";
import { ChevronArrowSvg } from "../svg/ChevronArrowSvg";
import { DashboardSvg } from "../svg/Nav/DashboardSvg";
import { OverviewSvg } from "../svg/Nav/OverviewSvg";
import { ChatSvg } from "../svg/Nav/ChatSvg";
import { TeamSvg } from "../svg/Nav/TeamSvg";
import { TasksSvg } from "../svg/Nav/TasksSvg";
import { ReportsSvg } from "../svg/Nav/ReportsSvg";
import { SettingsSvg } from "../svg/Nav/SettingsSvg";

export interface INav {}

export const Nav: FC<INav> = () => {
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);

  const handleActiveDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-brandCharcoalBlack md:py-[24px] px-[12px] flex flex-col items-center md:max-w-[80px] lg:max-w-[240px]">
      <div className="flex items-center justify-between w-full h-[70px] px-3 border-b border-[var(--clr-text-grey)]">
        <div>Logo</div>

        <div className="md:hidden">
          {activeDropdown ? (
            <button onClick={handleActiveDropdown}>
              <XCircleSvg />
            </button>
          ) : (
            <button onClick={handleActiveDropdown}>
              <HamburgerSvg />
            </button>
          )}
        </div>
      </div>

      <div className="overflow-y-hidden h-full w-full px-1 py-6">
        <div className="bg-[#353535] rounded-xl px-2.5 py-3.5 select-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MoonSvg />

              <div className="text-sm">
                <div className="font-bold">Sales House</div>
                <div className="text-[var(--clr-text-grey)]">General Item</div>
              </div>
            </div>

            <div>
              <ChevronArrowSvg
                width="12"
                height="12"
                strokeColor="white"
                strokeWidth="2.5"
                className="-rotate-90"
              />
              <ChevronArrowSvg
                width="12"
                height="12"
                strokeColor="white"
                strokeWidth="2.5"
                className="rotate-90"
              />
            </div>
          </div>
        </div>

        <ul className="text-[var(--clr-text-grey)] [&>*]:flex [&>*]:items-center [&>*]:gap-2 space-y-3 mt-6 [&>*]:cursor-pointer [&>*]:ease-in-out [&>*]:duration-300">
          <li className="hover:text-white">
            <DashboardSvg />
            Dashboard
          </li>

          <li className="hover:text-white">
            <OverviewSvg />
            Overview
          </li>

          <li className="hover:text-white">
            <ChatSvg />
            Chat
          </li>

          <li className="hover:text-white">
            <TeamSvg />
            Team
          </li>
        </ul>

        <div className="mt-8">
          <span className="uppercase font-bold text-[var(--clr-text-grey)] select-none">
            shortcuts
          </span>

          <ul className="text-[var(--clr-text-grey)] [&>*]:flex [&>*]:items-center [&>*]:gap-2 space-y-3 mt-3 [&>*]:cursor-pointer [&>*]:ease-in-out [&>*]:duration-300">
            <li className="hover:text-white">
              <TasksSvg />
              Tasks
            </li>

            <li className="hover:text-white">
              <ReportsSvg />
              Reports
            </li>

            <li className="hover:text-white">
              <SettingsSvg />
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
