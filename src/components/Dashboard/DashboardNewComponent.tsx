import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { Rocket } from "../../svg/Rocket";

export interface IDashboardNewComponent {}

export const DashboardNewComponent: FC<IDashboardNewComponent> = () => {
  return (
    <ContainerBorderRounded className="max-w-[535px]">
      <Rocket width={80} height={80} />
    </ContainerBorderRounded>
  );
};
