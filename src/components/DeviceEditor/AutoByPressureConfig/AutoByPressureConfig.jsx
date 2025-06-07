import React, { useState } from "react";
import EditOption from "../../CustomComponent/EditOption/EditOption";
import Switch from "../../CustomComponent/Switch/Switch";

export default function AutoByPressureConfig() {
  const [state, setState] = useState(false);

  const handleActive = (id, newState) => {
    setState(newState);
    console.log("Auto by pressure switch:", id, newState);
  };

  return (
    <div className="mb-1">
      <div className="bg-gray-400 flex items-center justify-between">
        <h3 className="font-bold p-1">Tự động điều khiển theo áp suất</h3>
        <Switch
          id="tu-dong-dieu-khien-theo-ap-suat"
          handleActive={handleActive}
        />
      </div>

      {state && (
        <>
          <EditOption
            id="tu-dong-theo-ap-suat"
            icon="Time"
            title="Kích hoạt"
            initialState={false}
            onToggle={(id, newState) =>
              console.log("Trạng thái mới: ", newState, id)
            }
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
        </>
      )}
    </div>
  );
}
