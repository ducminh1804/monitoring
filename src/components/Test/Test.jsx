import React, { useEffect, useState } from "react";
import PulseClockSettings from "../DeviceEditor/PulseClockSettings/PulseClockSettings";
import RotationOverTimeConfig from "../DeviceEditor/RotationOverTimeConfig/RotationOverTimeConfig";
import RotationByPressureConfig from "../DeviceEditor/RotationByPressureConfig/RotationOverTimeConfig";
import ValveControlByPressure from "../DeviceEditor/ValveControlByPressure";
import AutoByPressureConfig from "../DeviceEditor/AutoByPressureConfig/AutoByPressureConfig";
import RotationRefByPressure from "../DeviceEditor/RotationRefByPressure";
import ValveByPressureRef from "../DeviceEditor/ValveByPressureRef/ValveByPressureRef";
import Switch from "../CustomComponent/Switch/Switch";

export default function Test() {
  // useEffect(() => {
  //   console.log("in ra lan dau");

  //   return () => {
  //     console.log("unmount");
  //   };
  // });
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    console.log("mount lan dau");

    return () => {
      console.log("unmount");
    };
  }, [x]);

  return (
    <div>
      <button onClick={() => setX(x + 1)}>click X</button>
      <p>x = {x}</p>

      <button onClick={() => setY(y + 1)}>click Y</button>
      <p>y = {y}</p>

      <Switch id="tb1" />
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
