import React from "react";
import { RefreshCcw, Pencil, ChartCandlestick } from "lucide-react";
import { useNavigate } from "react-router";
export default function DataLogger() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("object");
    navigate(`/main/devices/dataLogger/2`);
  };

  console.log("datalogger");
  return (
    <div className="w-[80%] border p-2">
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
      <div className="flex justify-center mt-4 ">
        <div className="border w-full rounded  p-2 flex flex-col items-center gap-2">
          <ChartCandlestick />
          <span>Lock/Clean </span>
        </div>
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
