import React from "react";
import PressureControl from "./PressureControl/PressureControls";

export default function PressureControlList() {
  const dataList = [
    {
      id: 1,
      Battery: 3.7,
      RTC: "01/01/2025 12:00:00",
      PressureIn: 1.2,
      PressureOut: 1.0,
      Velocity: 2.5,
      Angle: 10,
      FlowRate: 3.4,
      NetFlowTotal: 12,
      ForwardFlow: 8,
      ReserveFlow: 4,
      UserSpan: 5,
      LowPowerMetter: false,
      Val_1: 0,
      Val_2: 1,
      Val_3: 0,
      Val_4: 1,
    },
    {
      id: 2,
      Battery: 3.6,
      RTC: "02/01/2025 13:15:30",
      PressureIn: 1.5,
      PressureOut: 1.3,
      Velocity: 2.8,
      Angle: 15,
      FlowRate: 4.1,
      NetFlowTotal: 15,
      ForwardFlow: 9,
      ReserveFlow: 6,
      UserSpan: 7,
      LowPowerMetter: true,
      Val_1: 0,
      Val_2: 0,
      Val_3: 1,
      Val_4: 0,
    },
    {
      id: 3,
      Battery: 3.8,
      RTC: "03/01/2025 14:45:20",
      PressureIn: 1.1,
      PressureOut: 0.9,
      Velocity: 2.3,
      Angle: 12,
      FlowRate: 3.8,
      NetFlowTotal: 14,
      ForwardFlow: 10,
      ReserveFlow: 4,
      UserSpan: 6,
      LowPowerMetter: false,
      Val_1: 1,
      Val_2: 0,
      Val_3: 1,
      Val_4: 0,
    },
  ];

  return (
    <div>
      {dataList.map((item, index) => (
        <div className="mb-2" key={index}>
          <PressureControl data={item} />
        </div>
      ))}
    </div>
  );
}
