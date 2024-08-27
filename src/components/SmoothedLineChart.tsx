import { FC, useEffect, useRef } from "react";
import * as echarts from "echarts";

export interface ISmoothedLineChart {}

export const SmoothedLineChart: FC<ISmoothedLineChart> = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const chart = echarts.init(ref.current);

      const option = {
        xAxis: {
          data: [
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
          ],
          splitLine: {
            show: true,
            lineStyle: {
              color: "#333",
              width: 5,
            },
          },
        },
        yAxis: {
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [150, 550, 600, 450, 700, 750, 650, 350, 500],
            type: "line",
            smooth: true,
            lineStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#c205e8" },
                { offset: 1, color: "#620175" },
              ]),
              width: 3,
            },
            showSymbol: false,
          },
        ],
      };

      chart.setOption(option);

      return () => {
        chart.dispose();
      };
    }
  }, []);

  return <div className="h-full" ref={ref} />;
};
