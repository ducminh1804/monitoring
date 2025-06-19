import DataLogger from "./DataLogger/DataLogger";

export default function DataLoggerList() {
  const dataList = [
    {
      id: 1,
      Battery: 3.7,
      BatteryPercent: 85,
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
    },
    {
      id: 2,
      Battery: 3.6,
      BatteryPercent: 73,
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
    },
    {
      id: 3,
      Battery: 3.8,
      BatteryPercent: 92,
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
    },
  ];
  return (
    <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
      {dataList.map((item, index) => (
        <div key={index}>
          <DataLogger data={item} />
        </div>
      ))}
    </div>
  );
}
