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
      className="grid h-full p-4 grid-cols-1
                    md:grid-cols-2 
                    lg:grid-cols-3
                    auto-rows-auto"
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
          "--c-sm-height": "70px",
          "--c-md-height": "128px",
          "--c-lg-height": "315px",
        } as CSSProperties
      }
    >
      <div className="fixed top-0 left-0 max-w-[240px] w-full h-screen bg-brandCharcoalBlack py-[24px] px-[12px] flex flex-col items-center" />

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
