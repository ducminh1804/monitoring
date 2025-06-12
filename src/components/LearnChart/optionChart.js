export const renderChart = (data, option, selectedDevice1, selectedDevice2) => {
  const width = window.innerWidth;

  const yAxisFull = [
    {
      type: "value",
      name: "Pressure In",
      position: "right",
      offset: 0,
      axisLine: { lineStyle: { color: "#6982CD" } },
      nameTextStyle: { color: "#6982CD", fontSize: 12, fontWeight: "bold" },
      axisLabel: { fontSize: 12, fontWeight: "bold" },
    },
    {
      type: "value",
      name: "Pressure Out",
      position: "right",
      offset: 80,
      axisLine: { lineStyle: { color: "#A4E287", type: "dotted" } },
      nameTextStyle: { color: "#A4E287", fontSize: 12, fontWeight: "bold" },
      axisLabel: { fontSize: 12, fontWeight: "bold" },
    },
    {
      type: "value",
      name: "Velocity",
      position: "left",
      offset: 0,
      axisLine: { lineStyle: { color: "#FAC858" } },
      nameTextStyle: { color: "#FAC858", fontSize: 12, fontWeight: "bold" },
      axisLabel: { fontSize: 12, fontWeight: "bold" },
    },
    {
      type: "value",
      name: "Flow Rate",
      position: "left",
      offset: 60,
      axisLine: { lineStyle: { color: "rgba(225, 11, 11, 1)" } },
      nameTextStyle: {
        color: "rgba(225, 11, 11, 1)",
        fontSize: 12,
        fontWeight: "bold",
      },
      axisLabel: { fontSize: 12, fontWeight: "bold" },
    },
  ];

  const colorMap = {
    "Pressure In": "#6982CD",
    "Pressure Out": "#A4E287",
    Velocity: "#FAC858",
    "Flow Rate": "rgba(225, 11, 11, 1)",
  };

  // Lọc yAxis theo option
  const selectYAxis = yAxisFull.filter((axis) => option.includes(axis.name));

  // Nếu không có option nào được chọn
  if (selectYAxis.length === 0) {
    return {
      title: { text: "Không có thuộc tính nào được chọn", left: "center" },
      xAxis: { type: "category" },
      yAxis: [],
      series: [],
      dataset: { source: data },
    };
  }

  // Tạo series khớp theo yAxis đã chọn
  const selectSeries = selectYAxis.map((axis, idx) => ({
    name: axis.name,
    type: "line",
    encode: { x: "time", y: axis.name },
    yAxisIndex: idx,
    lineStyle: { color: colorMap[axis.name], type: "solid", width: 2 },
    itemStyle: { color: colorMap[axis.name] },
  }));

  console.log(option);
  console.log(selectedDevice1, selectedDevice2);
  return {
    title: { left: "1%" },
    tooltip: { trigger: "axis" },
    grid: {
      right: "15%",
      bottom: "10%",
      left: `${width > 768 ? "10%" : "25%"}`,
    },
    toolbox: {
      right: 10,
      feature: {
        dataZoom: { yAxisIndex: "none" },
        restore: {},
        saveAsImage: {},
      },
    },
    dataZoom: [{ type: "inside", start: 80 }],
    dataset: { source: data },
    xAxis: { type: "category" },
    yAxis: selectYAxis,
    series: selectSeries,
  };
};
