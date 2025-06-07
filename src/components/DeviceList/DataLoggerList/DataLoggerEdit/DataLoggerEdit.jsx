import React from "react";
import ActiveBtn from "../../../../commons/ActiveBtn";
import BaseConfig from "../../../DeviceEditor/BaseConfig";
import PulseClockSettings from "../../../DeviceEditor/PulseClockSettings/PulseClockSettings";
export default function DataLoggerEdit() {
  return (
    <div>
      <BaseConfig />
      <PulseClockSettings />
    </div>
  );
}
