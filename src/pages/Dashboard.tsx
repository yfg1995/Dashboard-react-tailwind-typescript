import { FC } from "react";
import { DashboardUserHeader } from "../components/Dashboard/DashboardUserHeader";
import { DashboardUsersProfitUpdates } from "../components/Dashboard/DashboardUsersProfitUpdate";
import { DashboardWorkSummary } from "../components/Dashboard/DashboardWorkSummary";
import { DashboardSegmentation } from "../components/Dashboard/DashboardSegmentation";
import { DashboardSatisfaction } from "../components/Dashboard/DashboardSatisfaction";
import { DashboardNewComponent } from "../components/Dashboard/DashboardNewComponent";
import { countriesData } from "../dummyData";
import { Sortable } from "../components/Sortable/Sortable";
import { TCountriesData } from "../helpers/types";
import { ContainerBorderRounded } from "../components/ContainerBorderRounded";

export interface IDashboard {}

export const Dashboard: FC<IDashboard> = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <DashboardUserHeader />

      <DashboardUsersProfitUpdates />

      <div className="flex justify-between flex-wrap xl:flex-nowrap gap-4">
        <DashboardWorkSummary />

        <ContainerBorderRounded className="flex flex-col h-[320px] xl:max-w-[350px] 2xl:max-w-[530px]">
          <Sortable<TCountriesData>
            data={countriesData}
            keysToSortBy={["profit", "price"]}
            title="Top Countries"
          />
        </ContainerBorderRounded>
      </div>

      <div className="flex justify-between flex-wrap xl:flex-nowrap gap-4">
        <DashboardSegmentation />
        <DashboardSatisfaction />
        <DashboardNewComponent />
      </div>
    </div>
  );
};
