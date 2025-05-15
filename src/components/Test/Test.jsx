import React from "react";
import PulseClockSettings from "../DeviceEditor/PulseClockSettings/PulseClockSettings";
import RotationOverTimeConfig from "../DeviceEditor/RotationOverTimeConfig/RotationOverTimeConfig";
import RotationByPressureConfig from "../DeviceEditor/RotationByPressureConfig/RotationOverTimeConfig";
import ValveControlByPressure from "../DeviceEditor/ValveControlByPressure";
import AutoByPressureConfig from "../DeviceEditor/AutoByPressureConfig/AutoByPressureConfig";
import RotationRefByPressure from "../DeviceEditor/RotationRefByPressure";
import ValveByPressureRef from "../DeviceEditor/ValveByPressureRef/ValveByPressureRef";
import Switch from "../CustomComponent/Switch/Switch";

export default function Test() {
  return (
    <div>
      <Switch id="tb1"/>
      <PulseClockSettings />
      <RotationOverTimeConfig />
      <RotationByPressureConfig />
      <ValveControlByPressure condition={"pv_sp"} />
      <ValveControlByPressure condition={"sp_pv"} />
      <AutoByPressureConfig />
      <RotationRefByPressure />
      <ValveByPressureRef condition={"pv_sp"} />
      <ValveByPressureRef condition={"sp_pv"} />
    </div>
  );
}
