import React from "react";
import "./style.css"; // Đảm bảo bạn đã import file CSS này
import Spin from "../Spin/Spin";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 fade-bg">
      <div className="loading">
        {/* <SpinnerV2/> */}
        <Spin />
      </div>
    </div>
  );
}
