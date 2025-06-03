import React, { useState } from "react";
import { RefreshCcw, Pencil, ChartCandlestick } from "lucide-react";
import { useNavigate } from "react-router";
import val_on from "/svgs/val_on.svg";
import val_off from "/svgs/val_off.svg";

export default function PressureControl() {
  const navigate = useNavigate();
  

  const handleClick = () => {
    console.log("object");
    navigate(`/main/devices/pressureControl/1`);
  };

  const [valStatus, setValStatus] = useState({
    val_1: false,
    val_2: false,
    val_3: false,
    val_4: false,
  });


  console.log("datalogger");
  return (
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
            <span>Van {index+1} </span>
          </div>
        ))}
      </div>

      <div className="my-2">
        <div className="flex text-[15px] justify-between ">
          <p className="">Battery: 0V</p>
          <p>RTC: 00/00/0000 00:00:00</p>
        </div>
        <div className="flex text-[15px] justify-between ">
          <p>Pressure In: 0 (bar)</p>
          <p>Pressure Out: 0 (bar)</p>
        </div>
        <div className="flex text-[15px] justify-between ">
          <p>Velocity: 0 (m/s)</p>
          <p>Angle: 0°</p>
        </div>
        <div className="flex text-[15px] justify-between ">
          <p>FlowRate: 0 (m³/h)</p>
          <p>Net Flow Total: 0 (m³)</p>
        </div>
        <div className="flex text-[15px] justify-between ">
          <p>Forward Flow: 0 (m³)</p>
          <p>Reserve Flow: 0 (m³)</p>
        </div>
        <div className="flex text-[15px] justify-between ">
          <p>User Span: 0</p>
          <p>Low Power Metter: False</p>
        </div>
      </div>
    </div>
  );
}
