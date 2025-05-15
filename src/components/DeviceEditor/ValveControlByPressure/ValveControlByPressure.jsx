import React from "react";
import EditOption from "../../CustomComponent/EditOption/EditOption";

export default function ValveControlByPressure(props) {
  const { condition } = props;
  return (
    <div>
      <div className="bg-gray-400 flex items-center justify-between">
        <h3 className=" font-bold p-1">
          Cài đặt đóng/mở van theo áp suất (PV
          {condition === "pv_sp" ? ">" : "<"} SP)
        </h3>
        <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="sr-only">Use setting</span>
          <span
            className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-hidden="true"
          />
        </button>
      </div>

      <EditOption
        id={`van-theo-ap-suat-${condition === "pv_sp" ? "pv_sp" : "sp_pv"}`}
        icon="Time"
        title="Kích hoạt"
        initialState={false} // Mặc định trạng thái là "tắt"
        onToggle={(id, newState) => console.log("kich-hoat-" + id, newState)}
      />
      <EditOption
        id={`van-theo-ap-suat-${condition === "pv_sp" ? "pv_sp" : "sp_pv"}`}
        icon="Time"
        title="Cài đặt áp suất"
        description="0 bar"
        initialState={false} // Mặc định trạng thái là "tắt"
        onToggle={(id, newState) => console.log("kich-hoat-" + id, newState)}
      />
      {Array.from({ length: 4 }).map((_, index) => (
        <EditOption
          id={`van-theo-ap-suat-${condition === "pv_sp" ? "pv_sp" : "sp_pv"}`}
          key={index}
          icon="Val"
          title={`Chọn trạng thái van ${index + 1}`}
          initialState={false}
          onToggle={(id, newState) => {
            console.log(`Trạng thái mới của van ${index + 1}:`, newState, id);
          }}
        />
      ))}
    </div>
  );
}
