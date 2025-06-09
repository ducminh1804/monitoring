import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import val_off from "/svgs/val_off.svg";
import val_on from "/svgs/val_on.svg";
import { Pencil, RefreshCcw } from "lucide-react";
import Spinner from "../../../../commons/Spinner";

export default function DataLogger(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("object");
    navigate(`/main/devices/dataLogger/${props.data.id}`, {
      state: props.data,
    });
  };

  const [active, setActive] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleConnect = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const location = useLocation();
  const data = location.state || {};
  // const id = location.state?.id;
  // console.log(id);
  const handleEdit = () => {
    navigate(`/main/devices/dataLogger/${data.id}/edit`);
  };
  return (
    <div className="md:w-[80%]  border p-2">
      <div>
        {!data.id ? (
          <div className="flex justify-between items-center my-1 border rounded p-2">
            <h1>1008</h1>
            <button
              onClick={handleClick}
              type="button"
              className="w-[100px] px-6 py-3.5 text-base font-medium text-white bg-green-600"
            >
              Enter
            </button>
          </div>
        ) : (
          <div className="relative flex justify-between items-center border rounded p-2">
            <h1>10085444</h1>
            <div className="flex items-center gap-2">
              <div
                onClick={handleConnect}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded flex gap-2 items-center cursor-pointer hover:bg-gray-200 p-2 rounded-md"
              >
                {loading ? <Spinner /> : <RefreshCcw />}
                <span>call</span>
                <span className="">1:15</span>
              </div>

              <div
                onClick={handleEdit}
                className="cursor-pointer active:scale-95 transition-all border border-gray-300 hover:border-blue-500 p-2 rounded"
              >
                <Pencil />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4 ">
        <div className="border w-full rounded  p-2 flex flex-col items-center gap-2">
          <div onClick={() => setActive((prev) => !prev)} className="w-[20%]">
            <img src={active ? val_on : val_off} alt="" />
          </div>
          <span>Lock/Clean </span>
        </div>
      </div>

      <div className="my-2">
        <div className="flex text-[15px] justify-between ">
          <p className="">Battery: {props.data.Battery}V</p>
          <p>RTC: {props.data.RTC}</p>
        </div>
        <div className="flex text-[15px] justify-between ">
          <p>Pressure In: {props.data.PressureIn} (bar)</p>
          <p>Pressure Out: {props.data.PressureOut} (bar)</p>
        </div>
        <div className="flex text-[15px] justify-between ">
          <p>Velocity: {props.data.Velocity} (m/s)</p>
          <p>Angle: {props.data.Angle}°</p>
        </div>
        <div className="flex text-[15px] justify-between ">
          <p>FlowRate: {props.data.FlowRate} (m³/h)</p>
          <p>Net Flow Total: {props.data.NetFlowTotal} (m³)</p>
        </div>
        <div className="flex text-[15px] justify-between ">
          <p>Forward Flow: {props.data.ForwardFlow} (m³)</p>
          <p>Reserve Flow: {props.data.ReserveFlow} (m³)</p>
        </div>
        <div className="flex text-[15px] justify-between ">
          <p>User Span: {props.data.UserSpan}</p>
          <p>
            Low Power Metter: {props.data.LowPowerMetter ? "True" : "False"}
          </p>
        </div>
      </div>
    </div>
  );
}
