import React from "react";
import DeviceType from "./DeviceType/DeviceType";

export default function DeviceTypeList({ type }) {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
        {type.map((device) => (
          <DeviceType
            key={device.id}
            type={device.id}
            name={device.name}
            color={device.color}
            isActive={type === device.id}
          />
        ))}
        {/* <Outlet/> */}
      </div>
    </div>
  );
}
