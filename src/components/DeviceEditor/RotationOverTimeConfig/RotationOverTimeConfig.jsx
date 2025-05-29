import React, { useState } from "react";
import EditOption from "../../CustomComponent/EditOption/EditOption";
import Switch from "../../CustomComponent/Switch/Switch";

export default function RotationOverTimeConfig() {
  const handleGocQuayTheoThoiGian = (id, state) => {
    console.log(id);
    console.log("state:", state);
  };

  const [state, setState] = useState(false);
  const handleActive = (active) => {
    setState(active);
    console.log("state", state);
  };

  return (
    <div>
      <div className="bg-gray-400 flex items-center justify-between">
        <h3 className=" font-bold p-1">Cài đặt góc quay theo thời gian</h3>
        {/* <Switch
          handleActive={handleActive}
          id="cai-dat-goc-quay-theo-thoi-gian"
        /> */}
      </div>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={`goc-quay-theo-thoi-gian-${index}`}>
          <EditOption
            id={`goc-quay-theo-thoi-gian-${index + 1}`}
            icon="Time"
            title={`Giai đoạn ${index + 1}`}
            description="Khung giờ: 0 giờ 0 phút | Góc quay: 0"
            initialState={false}
            onToggle={(id, newState) => handleGocQuayTheoThoiGian(id, newState)}
          />
        </div>
      ))}
    </div>
  );
}
// const handleGocQuayTheoThoiGian = (id, state) => {
//   console.log(id);
//   console.log("state:", state);
// };
// (id, newState)=> handleGocQuayTheoThoiGian(id, newState)
