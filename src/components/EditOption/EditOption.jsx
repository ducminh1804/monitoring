import React, { useState } from "react";
import val_on from "/svgs/val_on.svg";
export default function EditOption({
  icon,
  title,
  description,
  initialState = false,
  onToggle,
}) {
  const [enabled, setEnabled] = useState(initialState);
  const toggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    onToggle?.(newState);
  };

  return (
    <div>
      <li className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-2 text-blue-500">
              {icon === "Time" && <Time />}
              {icon === "Val" && <ValveOn />}
            </div>
            <div>
              <span className="font-medium">{title}</span>
              <p className="text-gray-500">{description}</p>
            </div>
          </div>

          <div onClick={toggle} className="cursor-pointer">
            {enabled ? <SwitchOnIcon /> : <SwitchOffIcon />}
          </div>
        </div>
      </li>
    </div>
  );
}

const SwitchOnIcon = () => (
  <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
    <rect width="40" height="20" rx="10" fill="#3B82F6" />
    <circle cx="30" cy="10" r="6" fill="white" />
  </svg>
);

const SwitchOffIcon = () => (
  <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
    <rect width="40" height="20" rx="10" fill="#D1D5DB" />
    <circle cx="10" cy="10" r="6" fill="white" />
  </svg>
);

const Time = () => {
  return (
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
  );
};

const ValveOn = () => {
  return <img src={val_on} alt="" />;
};
