import React from "react";
import "./style.css"; // Đảm bảo bạn đã import file CSS này

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 fade-bg">
      <div className="loader"></div>
    </div>
  );
}
