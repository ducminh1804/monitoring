import React, { useState } from "react";
import EditOption from "../../CustomComponent/EditOption/EditOption";
import Switch from "../../CustomComponent/Switch/Switch";

export default function ValveByPressureRef({ condition }) {
  const [enabled, setEnabled] = useState(false);
  const idPrefix = `van-theo-ap-suat-id-tham-chieu-${
    condition === "pv_sp" ? "pv_sp" : "sp_pv"
  }`;

  const handleSwitchToggle = (id, newState) => {
    setEnabled(newState);
    console.log("Switch toggled:", id, newState);
  };

  return (
    <div className="mb-1">
      <div className="flex items-center justify-between bg-gray-400 p-2">
        <div className="flex items-center">
          <h3 className="font-bold p-1">
            Cài đặt đóng/mở van theo áp suất ID tham chiếu (PV
            {condition === "pv_sp" ? ">" : "<"} SP)
          </h3>
          <div className="mx-2 text-white border rounded p-2">
            <span>ID </span>1234
          </div>
        </div>

        <div className="font-bold flex items-center">
          <span className="mx-2">Pressure:</span>
          <span>0.89 bar</span>
          <Switch id={`${idPrefix}-switch`} handleActive={handleSwitchToggle} />
        </div>
      </div>

      {enabled && (
        <>
          <EditOption
            id={`${idPrefix}-kich-hoat`}
            icon="Time"
            title="Kích hoạt"
            initialState={false}
            onToggle={(id, newState) => console.log(id, newState)}
          />
          <EditOption
            id={`${idPrefix}-cai-dat-ap-suat`}
            icon="Time"
            title="Cài đặt áp suất"
            description="0 bar"
            initialState={false}
            onToggle={(id, newState) => console.log(id, newState)}
          />
          {Array.from({ length: 4 }).map((_, index) => (
            <EditOption
              id={`${idPrefix}-van-${index + 1}`}
              key={index}
              icon="Val"
              title={`Chọn trạng thái van ${index + 1}`}
              initialState={false}
              onToggle={(id, newState) =>
                console.log(
                  `Trạng thái mới của van ${index + 1}:`,
                  newState,
                  id
                )
              }
            />
          ))}
        </>
      )}
    </div>
  );
}
