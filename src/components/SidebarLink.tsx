import { FC, PropsWithChildren } from "react";
import { cn } from "../utils/utils";
import { NotificationCounter } from "./NotificationCounter";
import { NavLink } from "react-router-dom";

export interface ISidebarLink extends PropsWithChildren {
  title: string;
  link: string;
  classNameWrap?: string;
  classNameTitle?: string;
  notificationCounter?: number;
}

export const SidebarLink: FC<ISidebarLink> = ({
  title,
  link,
  classNameWrap,
  classNameTitle,
  notificationCounter,
  children,
}) => {
  return (
    <NavLink
      to={link}
      className={cn("relative hover:text-white", classNameWrap)}
    >
      {children}

      <div className="flex items-center justify-between">
        <div className={cn("md:hidden lg:block", classNameTitle)}>{title}</div>

        {notificationCounter !== undefined && (
          <NotificationCounter numCounter={notificationCounter} />
        )}
      </div>
    </NavLink>
  );
};
