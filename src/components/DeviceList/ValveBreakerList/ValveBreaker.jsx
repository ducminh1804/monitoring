import { ChartCandlestick } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

export default function ValveBreaker() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("object");
    navigate(`/main/devices/valveBreaker/edit`);
  };

  return (
    <div className="md:w-[80%] w-[80%] mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
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

      <div className="flex justify-between items-center mt-4 my-2">
        <div className="flex-1 border rounded p-2 flex flex-col items-center gap-2 mx-1">
          <ChartCandlestick />
          <span>Mode 1</span>
        </div>
        <div className="flex-1 border rounded p-2 flex flex-col items-center gap-2 mx-1">
          <ChartCandlestick />
          <span>Mode 2</span>
        </div>
        <div className="flex-1 border rounded p-2 flex flex-col items-center gap-2 mx-1">
          <ChartCandlestick />
          <span> Lock/Clean</span>
        </div>
      </div>

      <div>
        <div className="flex text-[15px] justify-between ">
          <p className="">Battery: 0V</p>
          <p>RTC: 00/00/0000 00:00:00</p>
        </div>{" "}
        <div className="flex text-[15px] justify-between ">
          <p>Pressure In: 0 (bar)</p>
          <p>Pressure Out: 0 (bar)</p>
        </div>{" "}
        <div className="flex text-[15px] justify-between ">
          <p>Velocity: 0 (m/s)</p>
          <p>Angle: 0°</p>
        </div>{" "}
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
