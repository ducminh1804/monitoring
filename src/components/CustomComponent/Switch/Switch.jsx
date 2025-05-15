import React, { useState } from "react";

export default function Switch({ id, handleActive }) {
  const [enabled, setEnabled] = useState(false);

  const toggle = (enabled) => {
    const newState = !enabled;
    setEnabled(newState);
    handleActive?.(id, newState);
    // console.log("id", id);
  };

  return (
    <div className="m-2 p-3">
      <div className="flex items-center justify-between">
        <div onClick={() => toggle(enabled)} className="cursor-pointer">
          {enabled ? <SwitchOnIcon /> : <SwitchOffIcon />}
        </div>
      </div>
    </div>
  );
}

const SwitchOnIcon = () => (
  <svg width="44" height="24" viewBox="0 0 44 24" fill="none">
    <rect width="44" height="24" rx="12" fill="#3B82F6" />
    <circle cx="32" cy="12" r="8" fill="white" />
  </svg>
);

const SwitchOffIcon = () => (
  <svg width="44" height="24" viewBox="0 0 44 24" fill="none">
    <rect width="44" height="24" rx="12" fill="#D1D5DB" />
    <circle cx="12" cy="12" r="8" fill="white" />
  </svg>
);
