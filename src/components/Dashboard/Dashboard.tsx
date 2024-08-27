import { FC } from "react";
import { DashboardUsersProfitUpdates } from "./DashboardUsersProfitUpdates";
import { DashboardWorkSummary } from "./DashboardWorkSummary";
import { DashboardTopCountries } from "./DashboardTopCountries";
import { DashboardSegmentation } from "./DashboardSegmentation";
import { DashboardSatisfication } from "./DashboardSatisfication";
import { DashboardNewComponent } from "./DashboardNewComponent";
import { Container } from "../Container";

export interface IDashboard {}

export const Dashboard: FC<IDashboard> = () => {
  return (
    <Container className="max-w-[1700px] w-full">
      <DashboardUsersProfitUpdates />

      <div className="flex-items-center h-full">
        <DashboardWorkSummary />
        <DashboardTopCountries />
      </div>

      <div className="flex-items-center">
        <DashboardSegmentation />
        <DashboardSatisfication />
        <DashboardNewComponent />
      </div>
    </Container>
  );
};
