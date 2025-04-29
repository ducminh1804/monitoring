import React, { useState } from "react";

export default function WaterQualityInfo() {
  const [averageType, setAverageType] = useState("hour");
  const [selectedParams, setSelectedParams] = useState([]);

  const parameters = [
    "Clorine",
    "Turbidity",
    "pH",
    "Conductivity",
    "Chỉ số 5",
    "Chỉ số 6",
    "Chỉ số 7",
    "Chỉ số 8",
  ];

  const toggleParam = (param) => {
    setSelectedParams((prev) =>
      prev.includes(param) ? prev.filter((p) => p !== param) : [...prev, param]
    );
  };

  const selectAll = () => {
    if (selectedParams.length === parameters.length) {
      setSelectedParams([]);
    } else {
      setSelectedParams(parameters);
    }
  };

  return (
    <div className="bg-[#1e1e2f] p-6 rounded-xl shadow-lg text-white space-y-6">
      {/* Section: Số lần vượt ngưỡng */}
      <div className="">
        <div className="flex items-center justify-between mb-1">
          {/* Trái: Icon + Tiêu đề */}
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-full">
              <span className="text-white">⚠️</span>
            </div>
            <span className="text-xl font-semibold">
              Số lần trạm vượt ngưỡng
            </span>
          </div>

          {/* Phải: Trạm + icon ℹ️ */}
          <div className="flex items-center gap-4">
            <span className="text-xl font-semibold text-blue-600">Trạm 1</span>
            <button className="text-gray-400 hover:text-white">ℹ️</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Today */}
          <div className="bg-[#2a2a3d] p-5 rounded-lg text-center">
            <p className="text-gray-400 text-sm">Ngày hôm nay</p>
            <p className="text-2xl font-bold mb-1">28/04/2025</p>
            <p className="text-red-400 font-semibold">3 lần vượt ngưỡng</p>
          </div>

          {/* Last week */}
          <div className="bg-[#2a2a3d] p-5 rounded-lg text-center">
            <p className="text-gray-400 text-sm">Tuần qua</p>
            <p className="text-2xl font-bold mb-1">21 – 27/04/2025</p>
            <p className="text-green-400 font-semibold">0 lần vượt ngưỡng</p>
          </div>
        </div>
      </div>

      {/* Section: Dữ liệu lịch sử */}
      <div className="">
        <h3 className="text-lg font-semibold mb-1 text-center">
          Dữ liệu lịch sử
        </h3>

        {/* Nút chọn kiểu trung bình */}
        <div className="flex justify-center mb-1">
          <div className="inline-flex bg-[#2f2f45] p-1 rounded-full">
            {[
              { key: "hour", label: "Trung bình giờ" },
              { key: "day", label: "Trung bình ngày" },
              { key: "week", label: "Trung bình tuần" },
            ].map((opt) => (
              <button
                key={opt.key}
                className={`px-4 py-1 rounded-full font-semibold ${
                  averageType === opt.key
                    ? "bg-white text-[#1e1e2f]"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setAverageType(opt.key)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section: Truy xuất dữ liệu */}
      <div className="">
        <div className="mt-2">
          <h4 className="text-md font-semibold mb-1 text-center">
            Truy xuất dữ liệu
          </h4>
          <div className="flex justify-center mb-1 ">
            <button
              className="text-sm px-4 py-1 bg-purple-500 hover:bg-purple-600 rounded-full"
              onClick={selectAll}
            >
              {selectedParams.length === parameters.length
                ? "Bỏ chọn tất cả"
                : "Chọn tất cả"}
            </button>
          </div>
          <div className="grid grid-cols-4 gap-1  mx-auto">
            {parameters.map((param) => (
              <label
                key={param}
                className={`cursor-pointer px-1 py-1 rounded-md border ${
                  selectedParams.includes(param)
                    ? "bg-blue-600 border-blue-500"
                    : "bg-[#2a2a3d] border-gray-600"
                }`}
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedParams.includes(param)}
                  onChange={() => toggleParam(param)}
                />
                {param}
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-2 space-x-4">
          {/* Lựa chọn ngày bắt đầu và ngày kết thúc */}
          <div className="flex items-center space-x-2">
            <input
              type="date"
              className="px-3 py-1 border border-gray-300 rounded-md"
              onChange={(e) => console.log("Ngày kết thúc:", e.target.value)}
            />
            <span>Đến</span>
            <input
              type="date"
              className="px-3 py-1 border border-gray-300 rounded-md"
              defaultValue={new Date().toISOString().split("T")[0]} // Set ngày mặc định là hôm nay
              onChange={(e) => console.log("Ngày bắt đầu:", e.target.value)}
            />
          </div>
          {/* Nút "Xem" */}
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-1 rounded-full shadow-md"
            onClick={() => {
              // TODO: Thêm logic truy xuất dữ liệu ở đây
              console.log(
                "Đang truy xuất:",
                selectedParams,
                "Kiểu:",
                averageType
              );
            }}
          >
            Xem
          </button>

          {/* Nút "Tải về" */}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-1 rounded-full shadow-md"
            onClick={() => {
              // TODO: Logic tải về dữ liệu
              console.log("Đang tải về dữ liệu...");
            }}
          >
            Tải về
          </button>
        </div>
      </div>
    </div>
  );
}
