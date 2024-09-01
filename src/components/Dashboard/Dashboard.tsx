import { CSSProperties, FC } from "react";
import { DashboardWorkSummary } from "./DashboardWorkSummary";
import { DashboardTopCountries } from "./DashboardTopCountries";
import { DashboardSegmentation } from "./DashboardSegmentation";
import { DashboardSatisfaction } from "./DashboardSatisfaction";
import { DashboardNewComponent } from "./DashboardNewComponent";
import { DashboardUsersProfitUpdates } from "./DashboardUsersProfitUpdate";
import { DashboardUserHeader } from "./DashboardUserHeader";

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
          'b b b'
          'c c d'
          'e f g'
        `,
          gap: "1rem",
          "--c-height": "128px",
          "--c-sec-height": "335px",
        } as CSSProperties
      }
    >
      <DashboardUserHeader style={{ gridArea: "a" }} />

      <DashboardUsersProfitUpdates style={{ gridArea: "b" }} />

      <DashboardWorkSummary style={{ gridArea: "c" }} />
      <DashboardTopCountries style={{ gridArea: "d" }} />

      <DashboardSegmentation style={{ gridArea: "e" }} />
      <DashboardSatisfaction style={{ gridArea: "f" }} />
      <DashboardNewComponent style={{ gridArea: "g" }} />
    </div>
  );
};
