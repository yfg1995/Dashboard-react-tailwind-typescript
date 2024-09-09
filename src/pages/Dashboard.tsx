import { FC } from "react";
import { DashboardUserHeader } from "../components/Dashboard/DashboardUserHeader";
import { DashboardUsersProfitUpdates } from "../components/Dashboard/DashboardUsersProfitUpdate";
import { DashboardWorkSummary } from "../components/Dashboard/DashboardWorkSummary";
import { DashboardTopCountries } from "../components/Dashboard/DashboardTopCountries";
import { DashboardSegmentation } from "../components/Dashboard/DashboardSegmentation";
import { DashboardSatisfaction } from "../components/Dashboard/DashboardSatisfaction";
import { DashboardNewComponent } from "../components/Dashboard/DashboardNewComponent";

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
