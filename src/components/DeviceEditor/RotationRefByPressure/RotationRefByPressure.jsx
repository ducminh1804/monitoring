import React, { useState } from "react";
import EditOption from "../../CustomComponent/EditOption/EditOption";
import Switch from "../../CustomComponent/Switch/Switch";

export default function RotationRefByPressure() {
  const [isActive, setIsActive] = useState(false);

  const handleActive = (id, newState) => {
    setIsActive(newState);
    console.log("Switch:", id, newState);
  };

  return (
    <div className="mb-1">
      <div className="flex items-center justify-between bg-gray-400 p-2">
        <div className="flex items-center">
          <h3 className="font-bold">
            Cài đặt góc quay theo áp suất ID tham chiếu
          </h3>
          <div className="mx-2 text-white border rounded p-2">
            <span>ID </span>1234
          </div>
        </div>
        <div className="flex items-center">
          <span className="mx-2 font-bold">Pressure:</span>
          <span>0.89 bar</span>
          <Switch id="rotation-ref-pressure" handleActive={handleActive} />
        </div>
      </div>

      {isActive && (
        <>
          <EditOption
            id="kich-hoat-ap-suat-id-tham-chieu"
            icon="Time"
            title="Kích hoạt"
            initialState={false}
            onToggle={(id, newState) => console.log(id, newState)}
          />
          <EditOption
            id="cai-dat-ap-suat-id-tham-chieu"
            icon="Time"
            title="Cài đặt áp suất"
            description="0 bar"
            initialState={false}
            onToggle={(id, newState) => console.log(id, newState)}
          />
          {Array.from({ length: 4 }).map((_, index) => (
            <EditOption
              key={index}
              id={`ap-suat-id-tham-chieu-${index + 1}`}
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
