import React, { useEffect, useRef } from "react";
import { renderChart } from "./optionChart";
import * as echarts from "echarts";
// import useMqttClient from "../../services/useMqqtClient";
export default function Chart({
  data,
  selectedDevice1,
  selectedDevice2,
  option,
}) {
  const chartRef = useRef(null);

  // console.log(option);

  useEffect(() => {
    const chart = renderChart(data, option, selectedDevice1, selectedDevice2);
    const chartInstance = echarts.init(chartRef.current, "", {
      renderer: "canvas",
    });
    chartInstance.setOption(chart);
    return () => {
      chartInstance.dispose();
    };
  }, [data, option, selectedDevice1, selectedDevice2]);

  // Log thiết bị đã chọn để kiểm tra
  useEffect(() => {
    // console.log("Thiết bị 1 đã chọn:", selectedDevice1);
    // console.log("Thiết bị 2 đã chọn:", selectedDevice2);
  }, [selectedDevice1, selectedDevice2]);


  return (
    <div>
      {/* <h1>Learn Chart</h1> */}
      <div
        ref={chartRef}
        style={{
          width: "auto",
          // height: "400px",
          height: "500px",
        }}
      ></div>
    </div>
  );
}

// ✅ Vì sao phải dùng useRef khi vẽ biểu đồ ECharts trong React?
// 🧩 1. ECharts là thư viện ngoài (không phải React)
// ECharts cần một thẻ <div> thật trong HTML để vẽ biểu đồ.

// Trong React, ta không nên dùng document.getElementById().

// 📌 → Giải pháp React: dùng useRef để lấy đúng thẻ <div> đã render.

// 🛠️ 2. useRef là cách chuẩn trong React để:
// Việc cần làm	Dùng useRef để...
// Gắn thư viện ECharts	Lấy DOM node để echarts.init()
// Tránh lỗi truy cập DOM trước khi render xong	Đảm bảo thẻ <div> đã tồn tại khi vẽ
// Không cần tạo ID	Không cần id="main" gì cả

// ✍️ Ghi chú ngắn gọn để nhớ:
// 🔹 useRef dùng để lấy thẻ HTML gốc trong React.
// 🔹 Dùng khi cần thư viện ngoài (ECharts, D3, Map...) gắn vào thẻ div.
// 🔹 Không nên dùng document.getElementById() trong React.

// ✅ useRef được khởi tạo trước,
// ⏱️ nhưng giá trị .current của nó (tức là phần tử DOM) chỉ có sau khi React render xong.
// 🕒 Sau đó, useEffect mới được gọi.

// 1. Khi component được gọi:
// React chạy các hook theo thứ tự (gồm useRef, useState, ...)

// useRef tạo ra một "cái hộp rỗng" với .current = null ban đầu.

// const chartRef = useRef(null); // Tạo ref, chưa có DOM
// 🔹 2. React render JSX → tạo ra DOM thật

// return <div ref={chartRef} />
// 📌 Lúc này, React tự động gán phần tử DOM thật vào chartRef.current.

// 🔹 3. Sau khi render xong, useEffect mới chạy

// useEffect(() => {
//   console.log(chartRef.current); // Lúc này đã có <div> DOM thật
// }, []);
