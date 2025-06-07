import AutoByPressureConfig from "../../../DeviceEditor/AutoByPressureConfig/AutoByPressureConfig";
import BaseConfig from "../../../DeviceEditor/BaseConfig";
import PulseClockSettings from "../../../DeviceEditor/PulseClockSettings/PulseClockSettings";
import RotationByPressureConfig from "../../../DeviceEditor/RotationByPressureConfig/RotationOverTimeConfig";
import RotationOverTimeConfig from "../../../DeviceEditor/RotationOverTimeConfig/RotationOverTimeConfig";
import RotationRefByPressure from "../../../DeviceEditor/RotationRefByPressure";
import ValveByPressureRef from "../../../DeviceEditor/ValveByPressureRef/ValveByPressureRef";
import ValveControlByPressure from "../../../DeviceEditor/ValveControlByPressure";

export default function PressureControlEdit() {
  return (
    <div>
      <BaseConfig />

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
