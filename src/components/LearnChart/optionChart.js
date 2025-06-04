import { useEffect } from "react";
import { data } from "./data";

export const renderChart = () => {
  // document:   https://echarts.apache.org/en/option.html#title
  const latestTime = data[data.length - 1]?.time;
  const width = window.innerWidth;

  // console.log(latestTime);
  return {
    title: {
      text: "Chart",
      left: "1%",
    },
    tooltip: {
      trigger: "axis",
    },
    grid: {
      // left: "40%",
      right: "15%",
      bottom: "10%",
      left: `${width > 768 ? "10%" : "25%"}`,
    },
    toolbox: {
      right: 10,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    dataZoom: [
      {
        type: "inside",
        start: 80,
      },
    ],
    dataset: {
      source: data,
    },
    xAxis: {
      type: "category",
    },
    yAxis: [
      {
        type: "value",
        name: "Pressure",
        position: "right",
        offset: 0,
      },
      {
        type: "value",
        name: "Velocity",
        position: "left",
        offset: 0,
      },
      {
        type: "value",
        name: "Flow Rate",
        position: "left",
        offset: 60,
        axisLine: {
          lineStyle: {
            color: "rgba(225, 11, 11, 1)",
          },
        },
        axisLabel: {
          marginLeft: 5,
          fontSize: 16,
          fontWeight: "bold",
        },
        nameTextStyle: {
          color: "rgba(225, 11, 11, 1)", // màu chữ tên trục
          fontSize: 14,
          fontWeight: "bold",
        },
      },
    ],
    series: [
      {
        name: "Pressure In",
        type: "line",
        encode: { x: "time", y: "Pressure In" },
        yAxisIndex: 0,
      },
      {
        name: "Pressure Out",
        type: "line",
        encode: { x: "time", y: "Pressure Out" },
        yAxisIndex: 0,
      },
      {
        name: "Velocity",
        type: "line",
        encode: { x: "time", y: "Velocity" },
        yAxisIndex: 1,
      },
      {
        name: "Flow Rate",
        type: "line",
        encode: { x: "time", y: "Flow Rate" },
        yAxisIndex: 2,
      },
    ],
  };
};
