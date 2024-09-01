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
        grid: {
          width: "90%",
          height: "175px",
          top: "15%",
          left: "7%",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          backgroundColor: "transparent",
          textStyle: {
            color: "#fff",
          },
          borderWidth: 0,
          formatter: function (params: any) {
            const dataPoint = params[0];
            return `<div class="rounded-xl text-brandTextGray overflow-hidden flex flex-col justify-center items-center">
                      <div class="flex items-center text-center w-full justify-between p-2 bg-[#1d1d1d]">
                        <div>Revenue</div>
                      </div>

                      <div class="text-center w-full p-3 bg-brandCharcoalGrey">
                        <div class="text-white font-bold text-lg">$${dataPoint.value}</div>
                        <div>Revenue from 230 sales</div>
                      </div>
                    </div>
            `;
          },
        },
        xAxis: {
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "var(--clr-charcoal-grey)",
              width: 1,
            },
          },
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
          boundaryGap: false,
          axisLabel: {
            fontSize: 15,
            padding: [8, 0, 0, 0],
          },
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
          axisLabel: {
            fontSize: 16,
            padding: [0, 12, 0, 0],
          },
        },
        series: [
          {
            data: [300, 450, 600, 900, 500, 650, 300, 700, 450],
            type: "line",
            smooth: true,
            lineStyle: {
              color: "#333",
              width: 3,
              type: "dashed",
            },
            showSymbol: false,
            emphasis: {
              focus: "none",
              itemStyle: {
                opacity: 0,
              },
            },
          },
          {
            data: [150, 550, 800, 1150, 700, 750, 350, 850, 500],
            type: "line",
            smooth: true,
            lineStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#42c2dd" },
                { offset: 1, color: "#2f49d0" },
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

  return <div className="h-[240px]" ref={ref} />;
};
