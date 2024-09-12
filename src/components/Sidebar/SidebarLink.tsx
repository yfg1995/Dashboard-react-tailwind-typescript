import { FC, PropsWithChildren } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../utils/utils";
import { NotificationCounter } from "../NotificationCounter";
import { useSidebarActiveState } from "../../zustand/useSidebarActiveState";

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
  const { isActive } = useSidebarActiveState();

  const location = useLocation();
  const isActiveLink = location.pathname === link;

  return (
    <NavLink
      to={link}
      className={cn(
        "relative hover:text-white",
        classNameWrap,
        isActiveLink && "text-white"
      )}
    >
      {children}

      <motion.div layout layoutRoot>
        {isActiveLink && (
          <motion.span
            layout
            layoutId="tabItemLine"
            style={{ originX: "0px" }}
            className="absolute top-0 right-0 w-[2px] h-full bg-white"
          />
        )}
      </motion.div>

      <div
        className={cn(
          "lg:block",
          classNameTitle,
          isActive ? "block" : "hidden"
        )}
      >
        {title}
      </div>

      {notificationCounter !== undefined && (
        <NotificationCounter numCounter={notificationCounter} />
      )}
    </NavLink>
  );
};
