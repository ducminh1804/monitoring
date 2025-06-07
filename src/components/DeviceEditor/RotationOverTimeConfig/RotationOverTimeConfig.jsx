import React, { useState } from "react";
import EditOption from "../../CustomComponent/EditOption/EditOption";
import Switch from "../../CustomComponent/Switch/Switch";

export default function RotationOverTimeConfig() {
  const [state, setState] = useState(false);

  const handleActive = (id, newState) => {
    setState(newState); // Cập nhật đúng theo trạng thái thực sự
  };

  const handleGocQuayTheoThoiGian = (id, state) => {
    // console.log(id);
    // console.log("state:", state);
  };

  return (
    <div className="mb-1">
      <div className="bg-gray-400 flex items-center justify-between">
        <h3 className="font-bold p-1">Cài đặt góc quay theo thời gian</h3>
        <Switch
          handleActive={handleActive}
          id="cai-dat-goc-quay-theo-thoi-gian"
        />
      </div>

      {state && (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={`goc-quay-theo-thoi-gian-${index}`}>
              <EditOption
                id={`goc-quay-theo-thoi-gian-${index + 1}`}
                icon="Time"
                title={`Giai đoạn ${index + 1}`}
                description="Khung giờ: 0 giờ 0 phút | Góc quay: 0"
                initialState={false}
                onToggle={(id, newState) =>
                  handleGocQuayTheoThoiGian(id, newState)
                }
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
