import { ChartCandlestick } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function WaterQuality(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    console.log("object");
    navigate(`/main/devices/waterQuality/${props.data.id}`, {
      state: props.data,
    });
  };

  const id = location.state?.id
  console.log("id", id);
  return (
    <div>
      <div className="w-[80%] mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
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

        <div>
          <div className="flex text-[15px] justify-between ">
            <p className="">Battery: {props.data.Battery}V</p>
            <p>RTC: {props.data.RTC}</p>
          </div>{" "}
          <div className="flex text-[15px] justify-between ">
            <p>Pressure In: {props.data.PressureIn} (bar)</p>
            <p>Pressure Out: {props.data.PressureOut} (bar)</p>
          </div>{" "}
          <div className="flex text-[15px] justify-between ">
            <p>Clo: {props.data.Clo} (mg/l)</p>
            <p>pH: {props.data.pH} (pH)</p>
          </div>{" "}
          <div className="flex text-[15px] justify-between ">
            <p>Turbidity: {props.data.Turbidity} (NTU)</p>
            <p>Conductivity: {props.data.Conductivity} (uS/cm)</p>
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
