import { useState } from "react";
import Pulse from "./Pulse/Pulse";
import Switch from "../../CustomComponent/Switch/Switch";

export default function PulseClockSettings() {
  const [state, setState] = useState(false);
  const handleActive = (id, newState) => {
    setState(newState);
    console.log(id, newState);
  };

  return (
    <div className="mb-1">
      <div className="bg-gray-400 flex items-center justify-between">
        <h3 className=" font-bold p-1">
          Thiết lập đồng hồ xung
        </h3>
        <Switch id="thiet-lap-dong-ho-xung" handleActive={handleActive} />
      </div>
      {state && (
        <div className="">
          <Pulse
            title="Pluses per unit volume"
            value="10"
            unit={
              <span>
                p/m<sup>3</sup>
              </span>
            }
          />

          <Pulse
            title="Pluses per unit volume"
            value="10"
            unit={
              <span>
                m<sup>3</sup>/h
              </span>
            }
          />

          <Pulse
            title="Pluses per unit volume"
            value="10"
            unit={
              <span>
                m<sup>3</sup>
              </span>
            }
          />

          <Pulse
            title="Pluses per unit volume"
            value="10"
            unit={
              <span>
                m<sup>3</sup>
              </span>
            }
          />

          <Pulse
            title="Pluses per unit volume"
            value="10"
            unit={
              <span>
                m<sup>3</sup>
              </span>
            }
          />
        </div>
      )}
    </div>
  );
}
