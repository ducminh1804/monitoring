import React from "react";
import EditOption from "../../CustomComponent/EditOption/EditOption";

export default function ValveByPressureRef({ condition }) {
  console.log(condition);
  return (
    <div>
      <div className="flex items-center bg-gray-400 ">
        <div className="flex items-center">
          <h3 className=" font-bold p-1">
            Cài đặt đóng/mở van theo áp suất ID tham chiếu (PV
            {condition === "pv_sp" ? ">" : "<"} SP)
          </h3>
          <div className="mx-2 text-white border rounded p-2">
            <span>ID</span>
            1234
          </div>
        </div>

        <div className=" font-bold">
          <span className="mx-2">Pressure:</span> <span>0.89 bar</span>
        </div>
      </div>

      <EditOption
        id={`van-theo-ap-suat-id-tham-chieu-${
          condition === "pv_sp" ? "pv_sp" : "sp_pv"
        }`}
        icon="Time"
        title="Kích hoạt"
        initialState={false} // Mặc định trạng thái là "tắt"
        onToggle={(id, newState) => console.log(id, newState)}
      />
      <EditOption
        id={`van-theo-ap-suat-id-tham-chieu-${
          condition === "pv_sp" ? "pv_sp" : "sp_pv"
        }`}
        icon="Time"
        title="Cài đặt áp suất"
        description="0 bar"
        initialState={false} // Mặc định trạng thái là "tắt"
        onToggle={(id, newState) => console.log(id, newState)}
      />
      {Array.from({ length: 4 }).map((_, index) => (
        <EditOption
          id={`van-theo-ap-suat-id-tham-chieu-${
            condition === "pv_sp" ? "pv_sp" : "sp_pv"
          }`}
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
