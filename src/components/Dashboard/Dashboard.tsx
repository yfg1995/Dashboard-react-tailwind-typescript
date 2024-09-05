import { FC } from "react";
import { DashboardUserHeader } from "./DashboardUserHeader";
import { DashboardUsersProfitUpdates } from "./DashboardUsersProfitUpdate";
import { DashboardWorkSummary } from "./DashboardWorkSummary";
import { DashboardTopCountries } from "./DashboardTopCountries";
import { DashboardSegmentation } from "./DashboardSegmentation";
import { DashboardSatisfaction } from "./DashboardSatisfaction";
import { DashboardNewComponent } from "./DashboardNewComponent";

export interface IDashboard {}

export const Dashboard: FC<IDashboard> = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <DashboardUserHeader />

      <DashboardUsersProfitUpdates />

      <div className="flex flex-wrap xl:flex-nowrap gap-4">
        <DashboardWorkSummary />
        <DashboardTopCountries />
      </div>

      <div className="flex flex-wrap xl:flex-nowrap gap-4">
        <DashboardSegmentation />
        <DashboardSatisfaction />
        <DashboardNewComponent />
      </div>
    </div>
  );
};
