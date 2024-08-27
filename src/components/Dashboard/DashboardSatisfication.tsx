import { FC } from "react";
import { ContainerBorderRounded } from "../ContainerBorderRounded";

export interface IDashboardSatisfication {}

export const DashboardSatisfication: FC<IDashboardSatisfication> = () => {
  return (
    <ContainerBorderRounded className="max-w-[550px]">
      DashboardSatisfication
    </ContainerBorderRounded>
  );
};
