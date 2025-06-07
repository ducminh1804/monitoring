import React, { useState } from "react";
import EditOption from "../../CustomComponent/EditOption/EditOption";
import Switch from "../../CustomComponent/Switch/Switch";

export default function ValveControlByPressure(props) {
  const { condition } = props;
  const [state, setState] = useState(false);

  const handleActive = (id, newState) => {
    setState(newState);
    console.log(id, newState);
  };

  return (
    <div className="mb-1">
      <div className="bg-gray-400 flex items-center justify-between">
        <h3 className="font-bold p-1">
          Cài đặt đóng/mở van theo áp suất (PV
          {condition === "pv_sp" ? ">" : "<"} SP)
        </h3>
        <Switch
          id={`van-theo-ap-suat-${condition}`}
          handleActive={handleActive}
        />
      </div>

      {state && (
        <>
          <EditOption
            id={`van-theo-ap-suat-${condition}-kich-hoat`}
            icon="Time"
            title="Kích hoạt"
            initialState={false}
            onToggle={(id, newState) =>
              console.log("kich-hoat-" + id, newState)
            }
          />
          <EditOption
            id={`van-theo-ap-suat-${condition}-caidat`}
            icon="Time"
            title="Cài đặt áp suất"
            description="0 bar"
            initialState={false}
            onToggle={(id, newState) => console.log("cai-dat-" + id, newState)}
          />
          {Array.from({ length: 4 }).map((_, index) => (
            <EditOption
              key={index}
              id={`van-theo-ap-suat-${condition}-trangthai-${index + 1}`}
              icon="Val"
              title={`Chọn trạng thái van ${index + 1}`}
              initialState={false}
              onToggle={(id, newState) => {
                console.log(
                  `Trạng thái mới của van ${index + 1}:`,
                  newState,
                  id
                );
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
