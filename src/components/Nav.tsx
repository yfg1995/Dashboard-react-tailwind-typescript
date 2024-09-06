import { FC, useEffect, useState } from "react";
import { XCircleSvg } from "../svg/XCircleSvg";
import { MoonSvg } from "../svg/Nav/MoonSvg";
import { ChevronArrowSvg } from "../svg/ChevronArrowSvg";
import { DashboardSvg } from "../svg/Nav/DashboardSvg";
import { OverviewSvg } from "../svg/Nav/OverviewSvg";
import { ChatSvg } from "../svg/Nav/ChatSvg";
import { TeamSvg } from "../svg/Nav/TeamSvg";
import { TasksSvg } from "../svg/Nav/TasksSvg";
import { ReportsSvg } from "../svg/Nav/ReportsSvg";
import { SettingsSvg } from "../svg/Nav/SettingsSvg";
import { TwoDotsVerticalSvg } from "../svg/TwoDotsVerticalSvg";
import { ImageRoundedContent } from "./ImageRoundedContent";
import { HamburgerSvg } from "../svg/Nav/HamburgerSvg";
import { currentDate, currentTime } from "../helpers/helpers";
import { NavCardBgSvg } from "../svg/Nav/NavCardBgSvg";
import { ProgressBar } from "./ProgressBar";
import gsap from "gsap";

export interface INav {}

export const Nav: FC<INav> = () => {
  const progressNav = 77;
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);

  const handleActiveDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  useEffect(() => {
    gsap.to(".number-counter-nav", {
      innerText: progressNav,
      duration: 1,
      snap: {
        innerText: 1,
      },
    });
  }, [progressNav]);

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-brandCharcoalBlack md:pt-[24px] px-2 flex flex-col items-center md:max-w-[80px] lg:max-w-[240px]">
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

      <div className="flex flex-col items-center lg:items-start h-full w-full px-1 py-5 overflow-y-auto">
        <div className="bg-[#353535] rounded-xl px-2.5 py-3.5 select-none w-full cursor-pointer hidden lg:block">
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

        <ul className="text-[var(--clr-text-grey)] lg:[&>*]:flex lg:[&>*]:items-center lg:[&>*]:gap-2 space-y-6 lg:space-y-3 lg:mt-6 [&>*]:cursor-pointer [&>*]:ease-in-out [&>*]:duration-300 [&>*]:w-full">
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
            <div className="hidden lg:block">Chat</div>
          </li>

          <li className="hover:text-white">
            <TeamSvg />
            <div className="hidden lg:block">Team</div>
          </li>
        </ul>

        <div className="lg:mt-8 mb-4">
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

        <div className="mt-auto hidden lg:block w-full">
          <div className="relative flex flex-col w-full h-full overflow-hidden rounded-xl p-3">
            <div className="text-sm">Used Space</div>

            <div className="text-xs text-[var(--clr-text-grey)]">
              <div>Admin updated: {currentTime}</div>
              <div>{currentDate}</div>
            </div>

            <div className="absolute top-0 left-0 w-full rounded-lg overflow-hidden -z-10">
              <NavCardBgSvg />
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-xs">
                <span className="number-counter-nav">0</span>%
              </span>

              <ProgressBar progress={progressNav} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full px-2 py-4 border-t border-[var(--clr-text-grey)]">
        <div className="flex items-center justify-center gap-2 text-[var(--clr-text-grey)] font-bold">
          <ImageRoundedContent imgSrc="users/user.jpg">
            <div className="hidden lg:block">Jerry Wilson</div>
          </ImageRoundedContent>
        </div>

        <TwoDotsVerticalSvg className="hidden lg:block mt-0" />
      </div>
    </div>
  );
};
