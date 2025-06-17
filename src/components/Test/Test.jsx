import PulseClockSettings from "../DeviceEditor/PulseClockSettings/PulseClockSettings";
import RotationOverTimeConfig from "../DeviceEditor/RotationOverTimeConfig/RotationOverTimeConfig";
import RotationByPressureConfig from "../DeviceEditor/RotationByPressureConfig/RotationOverTimeConfig";
import ValveControlByPressure from "../DeviceEditor/ValveControlByPressure";
import AutoByPressureConfig from "../DeviceEditor/AutoByPressureConfig/AutoByPressureConfig";
import RotationRefByPressure from "../DeviceEditor/RotationRefByPressure";
import ValveByPressureRef from "../DeviceEditor/ValveByPressureRef/ValveByPressureRef";
import BaseConfig from "../DeviceEditor/BaseConfig";
export default function Test() {
  return (
    <div>
      <h1 className="inline-block bg-blue-500 text-white text-5xl italic">
        helloworld
      </h1>
      {/* <Switch id="tb1" /> */}
      {/* <BaseConfig />
      <PulseClockSettings />
      <RotationOverTimeConfig />
      <RotationByPressureConfig />
      <ValveControlByPressure condition={"pv_sp"} />
      <ValveControlByPressure condition={"sp_pv"} />
      <AutoByPressureConfig />
      <RotationRefByPressure />
      <ValveByPressureRef condition={"pv_sp"} />
      <ValveByPressureRef condition={"sp_pv"} /> */}
    </div>
  );
}
