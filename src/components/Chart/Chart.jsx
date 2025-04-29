import React from "react";
import { Line } from "react-chartjs-2"; // Dùng cho biểu đồ đường
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Đăng ký các phần của Chart.js mà bạn sẽ sử dụng
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (props) => {
  const { result } = props;

  // Chuyển đổi thời gian thành chuỗi hh:mm
  const formatTime = (time) => {
    const date = new Date(time); // Giả sử 'time' là chuỗi ngày giờ hợp lệ
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`; // Định dạng chỉ giờ và phút hh:mm
  };

  // Lọc dữ liệu chỉ lấy các giờ tròn (00:00, 01:00,...)
  const filteredResult = result.filter((item) => {
    const date = new Date(item.time); // Chuyển đổi chuỗi thời gian thành đối tượng Date
    const minute = date.getMinutes();

    // Lọc chỉ lấy những mục có giờ tròn (minute == 0)
    return minute === 0; // Chỉ lấy dữ liệu khi phút là 0 (giờ tròn)
  });

  // Chuẩn bị dữ liệu cho biểu đồ từ result
  const labels = filteredResult.map((item) => formatTime(item.time)); // Lấy mảng giờ làm nhãn cho trục X
  const pressureIn = filteredResult.map((item) => item["Pressure In"]);
  const pressureOut = filteredResult.map((item) => item["Pressure Out"]);
  const velocity = filteredResult.map((item) => item["Velocity"]);
  const flowRate = filteredResult.map((item) => item["Flow Rate"]);

  const data = {
    labels: labels, // Dữ liệu giờ làm trục x
    datasets: [
      {
        label: "Pressure In",
        data: pressureIn, // Dữ liệu "Pressure In"
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
      },
      {
        label: "Pressure Out",
        data: pressureOut, // Dữ liệu "Pressure Out"
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 1,
      },
      {
        label: "Velocity",
        data: velocity, // Dữ liệu "Velocity"
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderWidth: 1,
      },
      {
        label: "Flow Rate",
        data: flowRate, // Dữ liệu "Flow Rate"
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 1,
      },
    ],
  };

  // Tùy chọn cấu hình cho biểu đồ
  const options = {
    scales: {
      x: {
        ticks: {
          callback: function (value) {
            return value; // Hiển thị chỉ giá trị giờ
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Biểu đồ đường (Line Chart)</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
