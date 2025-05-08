import { createChart, LineSeries } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";
import { data } from "../../utils/data";

const Chart = (props) => {
  const { result } = props;
  const pressureIns = result.map((item) => ({
    time: item.time,
    value: parseFloat(item["Pressure In"]),
    unit: "bar", // Thêm đơn vị "bar"
  }));

  const pressureOuts = result.map((item) => ({
    time: item.time,
    value: parseFloat(item["Pressure Out"]),
    unit: "bar", // Thêm đơn vị "bar"
  }));

  const velocitys = result.map((item) => ({
    time: item.time,
    value: parseFloat(item["Velocity"]),
    unit: "m/s", // Thêm đơn vị "m/s"
  }));

  const flowRates = result.map((item) => ({
    time: item.time,
    value: parseFloat(item["Flow Rate"]),
    unit: "m³/h", // Thêm đơn vị "m³/h"
  }));

  const [visibleSeries, setVisibleSeries] = useState({
    pressureIn: false,
    pressureOut: false,
    velocity: false,
    flowRate: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setVisibleSeries((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const chartRef = useRef();

  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: 950,
      height: 480,
      crosshair: {
        horzLine: {
          visible: true,
        },
      },
    });
    chart.applyOptions({
      timeScale: {
        rightOffset: 0,
        allowBoldLabels: true,
        secondsVisible: true,
        timeVisible: true,
      },
      leftPriceScale: {
        visible: true,
      },
    });
    const lineSeries1 = chart.addSeries(LineSeries, {
      color: "blue",
    });
    const lineSeries2 = chart.addSeries(LineSeries, {
      color: "green",
    });

    const lineSeries3 = chart.addSeries(LineSeries, {
      color: "yellow",
    });
    const lineSeries4 = chart.addSeries(LineSeries, {
      color: "red",
      priceScaleId: "left",
    });

    lineSeries1.setData(pressureIns);
    lineSeries2.setData(pressureOuts);
    lineSeries3.setData(velocitys);
    lineSeries4.setData(flowRates);
    lineSeries1.applyOptions({ visible: visibleSeries.pressureIn });
    lineSeries2.applyOptions({ visible: visibleSeries.pressureOut });
    lineSeries3.applyOptions({ visible: visibleSeries.velocity });
    lineSeries4.applyOptions({ visible: visibleSeries.flowRate });
    return () => {
      chart.remove();
    };
  }, [pressureIns]);

  return (
    <div>
      {/* Các checkbox cho phép người dùng chọn để hiển thị hay ẩn từng dòng */}
      <div className="flex gap-5">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="pressureIn"
            checked={visibleSeries.pressureIn}
            onChange={handleCheckboxChange}
            className="h-5 w-5 text-blue-500 focus:ring-blue-500"
          />
          <label className="text-lg font-semibold text-blue-500">
            Pressure In (bar)
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="pressureOut"
            checked={visibleSeries.pressureOut}
            onChange={handleCheckboxChange}
            className="h-5 w-5 text-green-500 focus:ring-green-500"
          />
          <label className="text-lg font-semibold text-green-500">
            Pressure Out (bar)
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="velocity"
            checked={visibleSeries.velocity}
            onChange={handleCheckboxChange}
            className="h-5 w-5 text-yellow-500 focus:ring-yellow-500"
          />
          <label className="text-lg font-semibold text-yellow-500">
            Velocity (m/s)
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="flowRate"
            checked={visibleSeries.flowRate}
            onChange={handleCheckboxChange}
            className="h-5 w-5 text-red-500 focus:ring-red-500"
          />
          <label className="text-lg font-semibold text-red-500">
            Flow Rate (m³/h)
          </label>
        </div>
      </div>

      <div className="relative">
        <span className="absolute z-50 left-[-15px] top-[200px] text-red-500 font-bold rotate-270 inline-block">
          m³/h
        </span>
        <div ref={chartRef}></div>
        <span className="absolute z-50 right-0 top-[200px] font-bold rotate-90 inline-block">
          bar
        </span>
      </div>
    </div>
  );
};

export default Chart;


// import React, { useEffect, useRef, useState } from "react";
// import { createChart, LineSeries } from "lightweight-charts";

// const Chart = ({ result }) => {
//   const [timeFilter, setTimeFilter] = useState("day"); // 'day', 'week', 'month'
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [visibleSeries, setVisibleSeries] = useState({
//     pressureIn: true,
//     pressureOut: true,
//     velocity: true,
//     flowRate: true,
//   });

//   // Handle Checkbox changes to toggle visibility of chart data series
//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setVisibleSeries((prevState) => ({
//       ...prevState,
//       [name]: checked,
//     }));
//   };

//   // Filter data by date range selected (Day, Week, Month)
//   const filterDataByDate = (data) => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     return data.filter((item) => {
//       const itemDate = new Date(item.time);
//       return itemDate >= start && itemDate <= end;
//     });
//   };

//   const chartRef = useRef();

//   useEffect(() => {
//     const chart = createChart(chartRef.current, {
//       width: 950,
//       height: 480,
//       crosshair: {
//         horzLine: {
//           visible: true,
//         },
//       },
//     });

//     chart.applyOptions({
//       timeScale: {
//         rightOffset: 0,
//         allowBoldLabels: true,
//         secondsVisible: true,
//         timeVisible: true,
//       },
//       leftPriceScale: {
//         visible: true,
//       },
//     });

//     const pressureIns = result.map((item) => ({
//       time: item.time,
//       value: parseFloat(item["Pressure In"]),
//       unit: "bar",
//     }));

//     const pressureOuts = result.map((item) => ({
//       time: item.time,
//       value: parseFloat(item["Pressure Out"]),
//       unit: "bar",
//     }));

//     const velocitys = result.map((item) => ({
//       time: item.time,
//       value: parseFloat(item["Velocity"]),
//       unit: "m/s",
//     }));

//     const flowRates = result.map((item) => ({
//       time: item.time,
//       value: parseFloat(item["Flow Rate"]),
//       unit: "m³/h",
//     }));

//     const filteredPressureIns = filterDataByDate(pressureIns);
//     const filteredPressureOuts = filterDataByDate(pressureOuts);
//     const filteredVelocitys = filterDataByDate(velocitys);
//     const filteredFlowRates = filterDataByDate(flowRates);

//     const lineSeries1 = chart.addSeries(LineSeries, {
//       color: "blue",
//     });

//     const lineSeries2 = chart.addSeries(LineSeries, {
//       color: "green",
//     });

//     const lineSeries3 = chart.addSeries(LineSeries, {
//       color: "yellow",
//     });

//     const lineSeries4 = chart.addSeries(LineSeries, {
//       color: "red",
//       priceScaleId: "left",
//     });

//     lineSeries1.setData(filteredPressureIns);
//     lineSeries2.setData(filteredPressureOuts);
//     lineSeries3.setData(filteredVelocitys);
//     lineSeries4.setData(filteredFlowRates);

//     lineSeries1.applyOptions({ visible: visibleSeries.pressureIn });
//     lineSeries2.applyOptions({ visible: visibleSeries.pressureOut });
//     lineSeries3.applyOptions({ visible: visibleSeries.velocity });
//     lineSeries4.applyOptions({ visible: visibleSeries.flowRate });

//     return () => {
//       chart.remove();
//     };
//   }, [result, startDate, endDate, visibleSeries]);

//   const handleTimeFilterChange = (event) => {
//     setTimeFilter(event.target.value);
//   };

//   const handleStartDateChange = (event) => {
//     setStartDate(event.target.value);
//   };

//   const handleEndDateChange = (event) => {
//     setEndDate(event.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <label>Choose Time Filter: </label>
//         <select value={timeFilter} onChange={handleTimeFilterChange}>
//           <option value="day">By Day</option>
//           <option value="week">By Week</option>
//           <option value="month">By Month</option>
//         </select>
//       </div>

//       {timeFilter === "day" && (
//         <div>
//           <label>Select Date Range: </label>
//           <input
//             type="date"
//             value={startDate}
//             onChange={handleStartDateChange}
//           />
//           <span> to </span>
//           <input type="date" value={endDate} onChange={handleEndDateChange} />
//         </div>
//       )}

//       {timeFilter === "week" && (
//         <div>
//           <label>Select Week Range: </label>
//           <input
//             type="week"
//             value={startDate}
//             onChange={handleStartDateChange}
//           />
//           <span> to </span>
//           <input type="week" value={endDate} onChange={handleEndDateChange} />
//         </div>
//       )}

//       {timeFilter === "month" && (
//         <div>
//           <label>Select Month Range: </label>
//           <input
//             type="month"
//             value={startDate}
//             onChange={handleStartDateChange}
//           />
//           <span> to </span>
//           <input type="month" value={endDate} onChange={handleEndDateChange} />
//         </div>
//       )}

//       <div className="flex gap-5">
//         <div className="flex items-center space-x-2">
//           <input
//             type="checkbox"
//             name="pressureIn"
//             checked={visibleSeries.pressureIn}
//             onChange={handleCheckboxChange}
//             className="h-5 w-5 text-blue-500 focus:ring-blue-500"
//           />
//           <label className="text-lg font-semibold text-blue-500">
//             Pressure In (bar)
//           </label>
//         </div>

//         <div className="flex items-center space-x-2">
//           <input
//             type="checkbox"
//             name="pressureOut"
//             checked={visibleSeries.pressureOut}
//             onChange={handleCheckboxChange}
//             className="h-5 w-5 text-green-500 focus:ring-green-500"
//           />
//           <label className="text-lg font-semibold text-green-500">
//             Pressure Out (bar)
//           </label>
//         </div>

//         <div className="flex items-center space-x-2">
//           <input
//             type="checkbox"
//             name="velocity"
//             checked={visibleSeries.velocity}
//             onChange={handleCheckboxChange}
//             className="h-5 w-5 text-yellow-500 focus:ring-yellow-500"
//           />
//           <label className="text-lg font-semibold text-yellow-500">
//             Velocity (m/s)
//           </label>
//         </div>

//         <div className="flex items-center space-x-2">
//           <input
//             type="checkbox"
//             name="flowRate"
//             checked={visibleSeries.flowRate}
//             onChange={handleCheckboxChange}
//             className="h-5 w-5 text-red-500 focus:ring-red-500"
//           />
//           <label className="text-lg font-semibold text-red-500">
//             Flow Rate (m³/h)
//           </label>
//         </div>
//       </div>

//       <div className="relative">
//         <span className="absolute z-50 left-[-15px] top-[200px] text-red-500 font-bold rotate-270 inline-block">
//           m³/h
//         </span>
//         <div ref={chartRef}></div>
//         <span className="absolute z-50 right-0 top-[200px] font-bold rotate-90 inline-block">
//           bar
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Chart;
