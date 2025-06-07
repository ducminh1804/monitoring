import React, { useState } from "react";
import EditOption from "../../CustomComponent/EditOption/EditOption";
import Switch from "../../CustomComponent/Switch/Switch";

export default function RotationByPressureConfig() {
  const [state, setState] = useState(false);

  const handleActive = (id, newState) => {
    setState(newState);
    console.log(id, newState);
  };

  const handleGocQuayTheoApSuat = (key, state) => {
    console.log("goc-quay-theo-ap-suat:", key);
    console.log("state:", state);
  };

  return (
    <div className="mb-1">
      <div className="bg-gray-400 flex items-center justify-between">
        <h3 className="font-bold p-1">Cài đặt góc quay theo áp suất</h3>
        <Switch id="goc-quay-theo-ap-suat" handleActive={handleActive} />
      </div>

      {state &&
        Array.from({ length: 5 }).map((_, index) => (
          <div key={`goc-quay-theo-thoi-gian-${index}`}>
            <EditOption
              id={`goc-quay-theo-thoi-gian-${index}`}
              icon="Time"
              title={`Giai đoạn ${index + 1}`}
              description="Khung giờ: 0 giờ 0 phút | Góc quay: 0"
              initialState={false}
              onToggle={(newState) => handleGocQuayTheoApSuat(index, newState)}
            />
          </div>
        ))}
    </div>
  );
}
