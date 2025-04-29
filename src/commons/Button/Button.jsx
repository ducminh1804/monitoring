import { CirclePlus } from "lucide-react";
import React from "react";

export default function Button(props) {
  const { action } = props;
  return (
    <div
      className="flex gap-1 items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg text-center 
hover:bg-blue-800 active:bg-blue-900 focus:ring-4 active:scale-95 
transition duration-150 ease-in-out w-[40%]"
    >
      <CirclePlus />
      <button type="button" className="">
        {action}
      </button>
    </div>
  );
}
