import React from "react";
import EditOption from "../../CustomComponent/EditOption/EditOption";

export default function AutoByPressureConfig() {
  return (
    <div>
      <div className="bg-gray-400 flex items-center justify-between">
        <h3 className=" font-bold p-1">Tự động điều khiển theo áp suất </h3>
        <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="sr-only">Use setting</span>
          <span
            className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-hidden="true"
          />
        </button>
      </div>

      <EditOption
        id="tu-dong-theo-ap-suat"
        icon="Time"
        title="Kích hoạt"
        initialState={false} // Mặc định trạng thái là "tắt"
        onToggle={(id, newState) => console.log("Trạng thái mới: ", newState,id)}
      />

      {Array.from({ length: 5 }).map((_, index) => (
        <EditOption
          id={`tu-dong-theo-ap-suat-${index + 1}`}
          key={index}
          icon="Time"
          title={`Khoảng cài đặt ${index + 1}`}
          description="Time: 00~00 | Pressure: 0.00~0.00"
          initialState={false}
          onToggle={(id, newState) => {
            console.log(
              `Trạng thái mới của khoảng ${index + 1}:`,
              newState,
              id
            );
          }}
        />
      ))}
    </div>
  );
}
