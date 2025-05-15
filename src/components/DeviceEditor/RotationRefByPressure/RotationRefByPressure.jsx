import React from "react";
import EditOption from "../../CustomComponent/EditOption/EditOption";

export default function RotationRefByPressure() {
  return (
    <div>
      <div className="flex items-center bg-gray-400 ">
        <div className="flex items-center">
          <h3 className="font-bold p-1">
            Cài đặt góc quay theo áp suất ID tham chiếu
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
        id={`kich-hoat-ap-suat-id-tham-chieu`}
        icon="Time"
        title="Kích hoạt"
        initialState={false} // Mặc định trạng thái là "tắt"
        onToggle={(id, newState) => console.log(id, newState)}
      />
      <EditOption
        id={`cai-dat-ap-suat-id-tham-chieu`}
        icon="Time"
        title="Cài đặt áp suất"
        description="0 bar"
        initialState={false} // Mặc định trạng thái là "tắt"
        onToggle={(id, newState) => console.log(id, newState)}
      />
      {Array.from({ length: 4 }).map((_, index) => (
        <EditOption
          id={`ap-suat-id-tham-chieu-${index + 1}`}
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
