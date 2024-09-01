import { FC, useEffect, useRef } from "react";
import * as echarts from "echarts";

interface IGaugeProgress {
  progress: number;
}

export const GaugeProgress: FC<IGaugeProgress> = ({ progress }) => {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.EChartsType | null>(null);

  useEffect(() => {
    if (ref.current) {
      const chart = echarts.init(ref.current);
      chartRef.current = chart;

      const option = {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            splitNumber: 15,
            itemStyle: {
              color: "#2f49d1",
            },
            progress: {
              show: true,
              roundCap: true,
              width: 20,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 20,
                color: [[1, "#353535"]],
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              splitNumber: 1,
              length: 1,
              lineStyle: {
                width: 5,
                color: "#2f49d1",
                cap: "round",
              },
            },
            axisLabel: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              formatter: function (value: number) {
                return "{value|" + value.toFixed(2) + "}%";
              },
              fontSize: 24,
              color: "#2f49d1",
              rich: {
                value: {
                  fontSize: 24,
                  fontWeight: "bolder",
                  color: "#2f49d1",
                },
              },
            },
            data: [
              {
                value: progress,
              },
            ],
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

  return <div className="h-[320px] w-full" ref={ref} />;
};
