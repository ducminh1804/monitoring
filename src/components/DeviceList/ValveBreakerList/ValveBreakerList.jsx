import React, { useEffect, useState } from "react";
import ValveBreaker from "./ValveBreaker/ValveBreaker";
import ValveBreakerSort from "../../CustomComponent/ValveBreakerSort/ValveBreakerSort";
import { getSortDeviceFromStorage } from "../../../services/localStorage";
export default function ValveBreakerList() {
  const dataList = [
    {
      id: 1,
      name: "4729",
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
      name: "8391",
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
      name: "1903",
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
    {
      id: 4,
      name: "7056",
      Battery: 3.5,
      RTC: "04/01/2025 11:20:10",
      PressureIn: 1.6,
      PressureOut: 1.4,
      Velocity: 3.0,
      Angle: 20,
      FlowRate: 4.5,
      NetFlowTotal: 18,
      ForwardFlow: 13,
      ReserveFlow: 5,
      UserSpan: 8,
      LowPowerMetter: true,
      Val_1: 1,
      Val_2: 1,
      Val_3: 0,
      Val_4: 0,
    },
    {
      id: 5,
      name: "6247",
      Battery: 3.9,
      RTC: "05/01/2025 09:10:05",
      PressureIn: 1.3,
      PressureOut: 1.1,
      Velocity: 2.7,
      Angle: 18,
      FlowRate: 3.9,
      NetFlowTotal: 17,
      ForwardFlow: 11,
      ReserveFlow: 6,
      UserSpan: 6,
      LowPowerMetter: false,
      Val_1: 0,
      Val_2: 1,
      Val_3: 1,
      Val_4: 1,
    },
    {
      id: 6,
      name: "5082",
      Battery: 3.4,
      RTC: "06/01/2025 15:50:40",
      PressureIn: 1.7,
      PressureOut: 1.6,
      Velocity: 3.1,
      Angle: 14,
      FlowRate: 4.7,
      NetFlowTotal: 20,
      ForwardFlow: 14,
      ReserveFlow: 6,
      UserSpan: 9,
      LowPowerMetter: true,
      Val_1: 1,
      Val_2: 1,
      Val_3: 1,
      Val_4: 1,
    },
    {
      id: 7,
      name: "9364",
      Battery: 3.6,
      RTC: "07/01/2025 08:25:15",
      PressureIn: 1.4,
      PressureOut: 1.2,
      Velocity: 2.6,
      Angle: 11,
      FlowRate: 3.6,
      NetFlowTotal: 13,
      ForwardFlow: 9,
      ReserveFlow: 4,
      UserSpan: 5,
      LowPowerMetter: false,
      Val_1: 0,
      Val_2: 0,
      Val_3: 0,
      Val_4: 1,
    },
    {
      id: 8,
      name: "2837",
      Battery: 3.2,
      RTC: "08/01/2025 10:05:50",
      PressureIn: 1.9,
      PressureOut: 1.5,
      Velocity: 3.4,
      Angle: 22,
      FlowRate: 5.0,
      NetFlowTotal: 22,
      ForwardFlow: 16,
      ReserveFlow: 6,
      UserSpan: 10,
      LowPowerMetter: true,
      Val_1: 1,
      Val_2: 0,
      Val_3: 1,
      Val_4: 1,
    },
    {
      id: 9,
      name: "1145",
      Battery: 3.85,
      RTC: "09/01/2025 17:35:25",
      PressureIn: 1.0,
      PressureOut: 0.8,
      Velocity: 2.0,
      Angle: 9,
      FlowRate: 3.1,
      NetFlowTotal: 11,
      ForwardFlow: 7,
      ReserveFlow: 4,
      UserSpan: 4,
      LowPowerMetter: false,
      Val_1: 0,
      Val_2: 0,
      Val_3: 0,
      Val_4: 0,
    },
    {
      id: 10,
      name: "7501",
      Battery: 3.95,
      RTC: "10/01/2025 19:00:00",
      PressureIn: 2.0,
      PressureOut: 1.7,
      Velocity: 3.6,
      Angle: 25,
      FlowRate: 5.3,
      NetFlowTotal: 25,
      ForwardFlow: 20,
      ReserveFlow: 5,
      UserSpan: 12,
      LowPowerMetter: true,
      Val_1: 1,
      Val_2: 1,
      Val_3: 1,
      Val_4: 0,
    },
  ];

  const [sample, setSample] = useState([]);
  const [sortList, setSortList] = useState([]);
  useEffect(() => {
    const sortList = [...dataList].sort((a, b) => {
      const aInSample = sample.includes(a.name);
      const bInSample = sample.includes(b.name);
      if (aInSample && !bInSample) return -1;
      if (!aInSample && bInSample) return 1;
      if (!aInSample && !bInSample) return 0;
      return sample.indexOf(a.name) - sample.indexOf(b.name);
    });
    setSortList(sortList);
  }, [sample]);
  // const sample = getSortDeviceFromStorage();

  console.log(sample);
  console.log(sortList);
  // 1. Cú pháp chuẩn của sort()
  // array.sort(compareFunction);
  // compareFunction(a, b) là hàm so sánh hai phần tử a và b.

  // Trả về:

  // < 0 → a đứng trước b

  // = 0 → giữ nguyên thứ tự

  // > 0 → b đứng trước a
  return (
    <div>
      <ValveBreakerSort handleSort={setSample} dataList={dataList} />
      {sortList.map((item, index) => (
        <div className="mb-2" key={index}>
          <ValveBreaker data={item} />
        </div>
      ))}
    </div>
  );
}
