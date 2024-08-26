import { FC } from "react";
import { DashboardUsersProfitUpdates } from "./DashboardUsersProfitUpdates";
import { DashboardWorkSummary } from "./DashboardWorkSummary";
import { DashboardTopCountries } from "./DashboardTopCountries";
import { DashboardSegmentation } from "./DashboardSegmentation";
import { DashboardSatisfication } from "./DashboardSatisfication";
import { DashboardNewComponent } from "./DashboardNewComponent";

export interface IDashboard {}

export const Dashboard: FC<IDashboard> = () => {
  return (
    <div className="max-w-[1700px] w-full">
      {/* <DashboardUsersProfitUpdates /> */}

      <div className="flex-items-center">
        <DashboardWorkSummary />
        <DashboardTopCountries />
      </div>

      <div className="flex-items-center">
        <DashboardSegmentation />
        <DashboardSatisfication />
        <DashboardNewComponent />
      </div>
    </div>
  );
};
