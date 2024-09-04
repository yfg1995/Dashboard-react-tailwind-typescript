import { CSSProperties, FC } from "react";
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
    <div className="p-4">
      <div className="fixed top-0 left-0 max-w-[240px] w-full h-screen bg-brandCharcoalBlack py-[24px] px-[12px] flex flex-col items-center" />

      <DashboardUserHeader />

      <div
        className="grid"
        style={
          {
            gap: "1rem",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto auto",
            gridTemplateAreas: `
            'a a a'
            'b b c'
            'd e f'
          `,
            "--c-md-height": "128px",
            "--c-lg-height": "315px",
          } as CSSProperties
        }
      >
        <DashboardUsersProfitUpdates style={{ gridArea: "a" }} />

        <DashboardWorkSummary style={{ gridArea: "b" }} />
        <DashboardTopCountries style={{ gridArea: "c" }} />

        <DashboardSegmentation style={{ gridArea: "d" }} />
        <DashboardSatisfaction style={{ gridArea: "e" }} />
        <DashboardNewComponent style={{ gridArea: "f" }} />
      </div>
    </div>
  );
};
