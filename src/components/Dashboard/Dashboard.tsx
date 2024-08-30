import { CSSProperties, FC } from "react";
import { DashboardWorkSummary } from "./DashboardWorkSummary";
import { DashboardTopCountries } from "./DashboardTopCountries";
import { DashboardSegmentation } from "./DashboardSegmentation";
import { DashboardSatisfaction } from "./DashboardSatisfaction";
import { DashboardNewComponent } from "./DashboardNewComponent";
import { DashboardUsersProfitUpdates } from "./DashboardUsersProfitUpdate";

export interface IDashboard {}

export const Dashboard: FC<IDashboard> = () => {
  return (
    <div
      className="grid h-full p-4"
      style={
        {
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto auto",
          gridTemplateAreas: `
          'a a a'
          'b b c'
          'd e f'
        `,
          gap: "1rem",
          "--c-height": "128px",
          "--c-sec-height": "320px",
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
  );
};
