import { FC, PropsWithChildren } from "react";
import { cn } from "../utils/utils";
import { NotificationCounter } from "./NotificationCounter";

export interface INavLink extends PropsWithChildren {
  title: string;
  classNameWrap?: string;
  classNameTitle?: string;
  notificationCounter?: number;
}

export const NavLink: FC<INavLink> = ({
  title,
  classNameWrap,
  classNameTitle,
  notificationCounter,
  children,
}) => {
  return (
    <div className={cn("relative hover:text-white", classNameWrap)}>
      {children}

      <div className="flex items-center justify-between">
        <div className={cn("md:hidden lg:block", classNameTitle)}>{title}</div>

        {notificationCounter !== undefined && (
          <NotificationCounter numCounter={notificationCounter} />
        )}
      </div>
    </div>
  );
};
