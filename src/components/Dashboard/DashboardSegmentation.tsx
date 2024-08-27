import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";

export interface IDashboardSegmentation {}

export const DashboardSegmentation: FC<IDashboardSegmentation> = () => {
  return (
    <ContainerBorderRounded className="max-w-[550px]">
      DashboardSegmentation
    </ContainerBorderRounded>
  );
};
