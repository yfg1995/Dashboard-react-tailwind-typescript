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
    <Container className="max-w-[1700px] flex flex-col gap-4 justify-center">
      <DashboardUsersProfitUpdates />

      <div className="flex gap-5">
        <DashboardWorkSummary />
        <DashboardTopCountries />
      </div>

      <div className="flex gap-5">
        <div className="flex gap-5">
          <DashboardSegmentation />
          <DashboardSatisfication />
        </div>

        <DashboardNewComponent />
      </div>
    </Container>
  );
};
