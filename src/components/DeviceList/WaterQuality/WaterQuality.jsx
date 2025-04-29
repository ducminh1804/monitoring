import { ChartCandlestick } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

export default function WaterQuality() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("object");
    navigate(`/main/devices/waterQuality/4`);
  };

  return (
    <div>
      <div className="w-[80%] mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        {/* <h2 className="text-2xl font-bold text-center mb-4">
        {device.deviceId} {device.deviceName}
      </h2> */}
        <div className="flex justify-between items-center my-1 border rounded p-2">
          <h1>1446 Valve Breaker</h1>
          <button
            onClick={handleClick}
            type="button"
            className="w-[100px] px-6 py-3.5 text-base font-medium text-white bg-green-600 active:scale-95 transition-all rounded cursor-pointer"
          >
            Enter
          </button>
        </div>

        <div className="flex justify-between items-center mt-4 my-2">
          <div className="flex-1 border rounded p-2 flex flex-col items-center gap-2 mx-1">
            <ChartCandlestick />
            <span>Low Power Mode</span>
          </div>
        </div>

        {/* hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
      rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700
      dark:focus:ring-blue-800 */}
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
            <p>Clo: 0.5 (mg/l)</p>
            <p>pH: 6.5</p>
          </div>{" "}
          <div className="flex text-[15px] justify-between ">
            <p>Turbidity: 0.13 (NTU)</p>
            <p>Conductivity: 109.5 (uS/cm)</p>
          </div>
          <div className="flex text-[15px] justify-between ">
            <p>Chỉ số 5..</p>
            <p>Chỉ số 6..</p>
          </div>
          <div className="flex text-[15px] justify-between ">
            <p>Chỉ số 7..</p>
            <p>Chỉ số 8..</p>
          </div>
        </div>
      </div>
    </div>
  );
}
