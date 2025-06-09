import React from "react";
import { useNavigate } from "react-router";

export default function DeviceType({ name, type, color, isActive }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Điều hướng đến trang danh sách thiết bị theo deviceId
    navigate(`/devices/${type}`);
    console.log("click")
    console.log(type)
    
  };

  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-lg p-6 text-center cursor-pointer
        ${color} ${isActive ? "bg-blue-100" : "bg-white"}
        transition-all duration-200 hover:scale-105`}
    >
      {type}
      <h3 className="font-semibold">{name}</h3>
    </div>
  );
}
