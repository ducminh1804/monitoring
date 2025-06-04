import React, { useState } from "react";
import { useNavigate } from "react-router";
import val_on from "/svgs/val_on.svg";
import val_off from "/svgs/val_off.svg";

export default function PressureControl(data) {
  // const { id, battery } = data;
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("object");
    navigate(`/main/devices/pressureControl/${data.data.id}`, {
      state: data.data,
    });
  };

  console.log("data", data.data);

  const [valStatus, setValStatus] = useState({
    val_1: false,
    val_2: false,
    val_3: false,
    val_4: false,
  });

  return (
    <div>
      <div className="md:w-[80%] border p-2 rounded">
        <div>
          <div className="flex justify-between items-center my-1 border rounded p-2">
            <h1>1446 Valve Breaker</h1>
            <button
              onClick={handleClick}
              type="button"
              className="w-[100px] px-6 py-3.5 text-base font-medium text-white bg-green-600"
            >
              Enter
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={`val-${index}`}
              className="border w-full rounded  p-2 flex flex-col items-center gap-2"
            >
              <div className="w-[80%] ">
                <img
                  src={valStatus[`val_${index + 1}`] ? val_on : val_off}
                  alt=""
                />
              </div>
              <span>Van {index + 1} </span>
            </div>
          ))}
        </div>

        <div className="my-2">
          <div className="flex text-[15px] justify-between ">
            <p className="">Battery: {data.data.Battery}V</p>
            <p>RTC: {data.data.RTC}</p>
          </div>
          <div className="flex text-[15px] justify-between ">
            <p>Pressure In: {data.data.PressureIn} (bar)</p>
            <p>Pressure Out: {data.data.PressureOut} (bar)</p>
          </div>
          <div className="flex text-[15px] justify-between ">
            <p>Velocity: {data.data.Velocity} (m/s)</p>
            <p>Angle: {data.data.Angle}°</p>
          </div>
          <div className="flex text-[15px] justify-between ">
            <p>FlowRate: {data.data.FlowRate} (m³/h)</p>
            <p>Net Flow Total: {data.data.NetFlowTotal} (m³)</p>
          </div>
          <div className="flex text-[15px] justify-between ">
            <p>Forward Flow: {data.data.ForwardFlow} (m³)</p>
            <p>Reserve Flow: {data.data.ReserveFlow} (m³)</p>
          </div>
          <div className="flex text-[15px] justify-between ">
            <p>User Span: {data.data.UserSpan}</p>
            <p>
              Low Power Metter: {data.data.LowPowerMetter ? "True" : "False"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
