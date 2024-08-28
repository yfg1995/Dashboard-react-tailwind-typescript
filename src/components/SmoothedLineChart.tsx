import { FC, useEffect, useRef } from "react";
import * as echarts from "echarts";

export interface ISmoothedLineChart {}

export const SmoothedLineChart: FC<ISmoothedLineChart> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.EChartsType | null>(null);

  useEffect(() => {
    if (ref.current) {
      const chart = echarts.init(ref.current);
      chartRef.current = chart;

      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              color: "#353535",
            },
          },
          backgroundColor: "#353535",
          textStyle: {
            color: "#fff",
          },
          borderWidth: 0,
          formatter: function (params: any) {
            const dataPoint = params[0];
            return `$${dataPoint.value}`;
          },
        },
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
              width: 6,
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
            data: [150, 550, 800, 1150, 700, 750, 350, 850, 500],
            type: "line",
            smooth: true,
            lineStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#c205e8" },
                { offset: 1, color: "#620175" },
              ]),
              width: 4,
            },
            showSymbol: false,
          },
        ],
      };

      chart.setOption(option);

      const handleResize = () => {
        if (chartRef.current) {
          chartRef.current.resize();
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        if (chartRef.current) {
          chartRef.current.dispose();
        }
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <div className="h-[350px]" ref={ref} />;
};
