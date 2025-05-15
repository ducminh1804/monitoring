import React from "react";
import EditOption from "../../CustomComponent/EditOption/EditOption";

export default function RotationByPressureConfig() {
  const handleGocQuayTheoApSuat = (key, state) => {
    console.log("goc-quay-theo-ap-suat:", key);
    console.log("state:", state);
  };
  return (
    <div>
      <div className="bg-gray-400 flex items-center justify-between">
        <h3 className=" font-bold p-1">Cài đặt góc quay theo áp suất</h3>
        <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="sr-only">Use setting</span>
          <span
            className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-hidden="true"
          />
        </button>
      </div>
      {Array.from({ length: 5 }).map((_, index) => (
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
