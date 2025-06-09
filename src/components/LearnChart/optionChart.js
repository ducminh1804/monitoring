import { useEffect } from "react";
import { dataSample } from "./data";

export const renderChart = (data) => {
  // document:   https://echarts.apache.org/en/option.html#title
  const width = window.innerWidth;

  // console.log(latestTime);
  return {
    title: {
      // text: "Chart",
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
        name: "Pressure In",
        position: "right",
        offset: 0,
        axisLine: {
          lineStyle: {
            color: "#6982CD",
          },
        },
        nameTextStyle: {
          color: "#6982CD", // màu chữ tên trục
          fontSize: 12,
          fontWeight: "bold",
        },
        axisLabel: {
          marginLeft: 5,
          fontSize: 12,
          fontWeight: "bold",
        },
      },
      {
        type: "value",
        name: "Pressure Out",
        position: "right",
        offset: 80,
        axisLine: {
          lineStyle: {
            color: "#A4E287",
          },
        },
        nameTextStyle: {
          color: "#A4E287", // màu chữ tên trục
          fontSize: 12,
          fontWeight: "bold",
        },
        axisLabel: {
          marginLeft: 5,
          fontSize: 12,
          fontWeight: "bold",
        },
      },
      {
        type: "value",
        name: "Velocity",
        position: "left",
        offset: 0,
        axisLine: {
          lineStyle: {
            color: "#FAC858",
          },
        },
        nameTextStyle: {
          color: "#FAC858", // màu chữ tên trục
          fontSize: 12,
          fontWeight: "bold",
        },
        axisLabel: {
          marginLeft: 5,
          fontSize: 12,
          fontWeight: "bold",
        },
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
        nameTextStyle: {
          color: "rgba(225, 11, 11, 1)", // màu chữ tên trục
          fontSize: 12,
          fontWeight: "bold",
        },
        axisLabel: {
          marginLeft: 5,
          fontSize: 12,
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
        yAxisIndex: 1,
      },
      {
        name: "Velocity",
        type: "line",
        encode: { x: "time", y: "Velocity" },
        yAxisIndex: 2,
      },
      {
        name: "Flow Rate",
        type: "line",
        encode: { x: "time", y: "Flow Rate" },
        yAxisIndex: 3,
      },
    ],
  };
};
