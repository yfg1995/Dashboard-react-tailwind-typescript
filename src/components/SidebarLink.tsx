import { FC, PropsWithChildren } from "react";
import { cn } from "../utils/utils";
import { NotificationCounter } from "./NotificationCounter";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <NavLink
      to={link}
      className={cn(
        "relative hover:text-white",
        classNameWrap,
        isActive && "text-white"
      )}
    >
      {children}
      {isActive && (
        <motion.span
          layout
          layoutId="tabItemLine"
          className="absolute top-0 right-0 w-px h-full bg-white"
        />
      )}

      <div className="flex items-center justify-between">
        <div className={cn("md:hidden lg:block", classNameTitle)}>{title}</div>

        {notificationCounter !== undefined && (
          <NotificationCounter numCounter={notificationCounter} />
        )}
      </div>
    </NavLink>
  );
};
