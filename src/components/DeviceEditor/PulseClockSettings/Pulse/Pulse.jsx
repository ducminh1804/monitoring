import React from "react";

export default function Pulse({ title, value, unit }) {
  return (
    <div className="m-2 p-3 grid grid-cols-3 grid-rows-1 gap-4 text-center">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-2 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="">
          <span className="font-medium">{title}</span>
        </div>
      </div>
      <div className="">
        <input type="text" placeholder="" defaultValue={value} />
      </div>
      {unit}
    </div>
  );
}
