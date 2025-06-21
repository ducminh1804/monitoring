export const renderChart = (data, option, selectedDevice1, selectedDevice2) => {
  const width = window.innerWidth;

  // Y-axis cấu hình cho từng loại dữ liệu
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

  // Color map cho từng thiết bị + thuộc tính
  const colorMap = {
    [`Pressure In (${selectedDevice1})`]: "#6982CD",
    [`Pressure In (${selectedDevice2})`]: "#6982CD",

    [`Pressure Out (${selectedDevice1})`]: "#A4E287",
    [`Pressure Out (${selectedDevice2})`]: "#A4E287",

    [`Velocity (${selectedDevice1})`]: "#FAC858",
    [`Velocity (${selectedDevice2})`]: "#FAC858",

    [`Flow Rate (${selectedDevice1})`]: "rgba(225, 11, 11, 1)",
    [`Flow Rate (${selectedDevice2})`]: "rgba(225, 11, 11, 1)",
  };

  // Lọc các yAxis mà user chọn
  const selectYAxis = yAxisFull.filter((axis) => option.includes(axis.name));

  if (selectYAxis.length === 0) {
    return {
      title: { text: "Không có thuộc tính nào được chọn", left: "center" },
      xAxis: { type: "category" },
      yAxis: [],
      series: [],
      dataset: { source: data },
    };
  }

  // Tạo series cho mỗi thiết bị * option
  const series = [];

  option.forEach((field) => {
    const yAxisIndex = selectYAxis.findIndex((y) => y.name === field);

    // Thiết bị 1
    const field1 = `${field} (${selectedDevice1})`;
    if (data[0] && field1 in data[0]) {
      series.push({
        name: field1,
        type: "line",
        encode: { x: "time", y: field1 },
        yAxisIndex,
        lineStyle: {
          color: colorMap[field1],
          width: 2,
          type: "solid",
        },
        itemStyle: {
          color: colorMap[field1],
        },
      });
    }

    // Thiết bị 2
    const field2 = `${field} (${selectedDevice2})`;
    if (selectedDevice2 && data[0] && field2 in data[0]) {
      series.push({
        name: field2,
        type: "line",
        encode: { x: "time", y: field2 },
        yAxisIndex,
        lineStyle: {
          color: colorMap[field2],
          width: 2,
          type: "dashed",
        },
        itemStyle: {
          color: colorMap[field2],
        },
      });
    }
  });

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
    series,
  };
};
