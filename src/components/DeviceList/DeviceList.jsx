import React from "react";
import { ChartCandlestick } from "lucide-react";
import { useNavigate, useParams } from "react-router";
export default function DeviceList({ device }) {
  const navigate = useNavigate();
  const {type} = useParams()
  
  const handleClick = () => {

    // console.log(device.deviceId);
    navigate(`/main/devices/${device.deviceType}/${device.deviceId}`);
  };
  // const type = device.deviceType;

  return (
    <div
      onClick={handleClick}
      className="w-[80%] mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md"
    >
      {/* <h2 className="text-2xl font-bold text-center mb-4">
        {device.deviceId} {device.deviceName}
      </h2> */}
      <div className="flex justify-between items-center my-1 border rounded p-2">
        <h1>
          {device.deviceId} {device.deviceName}
        </h1>
        <button
          type="button"
          className="w-[100px] px-6 py-3.5 text-base font-medium text-white bg-green-600"
        >
          Enter{" "}
        </button>
      </div>

      <div className="flex justify-between items-center  mt-4 my-2">
        {type === "dataLogger" ? (
          <div className="flex items-center justify-between">
            <div className="border rounded  p-2 flex flex-col items-center gap-2">
              <ChartCandlestick />
              <span>Van 1</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="border rounded  p-2 flex flex-col items-center gap-2">
              <ChartCandlestick />
              <span>Van 1</span>
            </div>{" "}
            <div className="border rounded  p-2 flex flex-col items-center gap-2">
              <ChartCandlestick />
              <span>Van 2</span>
            </div>{" "}
            <div className="border rounded  p-2 flex flex-col items-center gap-2">
              <ChartCandlestick />
              <span>Van 3</span>
            </div>{" "}
            <div className="border rounded  p-2 flex flex-col items-center gap-2">
              <ChartCandlestick />
              <span>Van 4</span>
            </div>
          </div>
        )}
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
