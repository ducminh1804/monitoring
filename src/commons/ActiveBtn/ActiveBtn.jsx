import React from "react";

export default function ActiveBtn() {
  return (
    <div>
      <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span className="sr-only">Use setting</span>
        <span
          className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
