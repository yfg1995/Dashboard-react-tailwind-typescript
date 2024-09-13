import { FC } from "react";
import { HamburgerButton } from "../components/HamburgerButton";

export interface IOverview {}

export const Overview: FC<IOverview> = () => {
  return (
    <div>
      Overview <HamburgerButton />
    </div>
  );
};
