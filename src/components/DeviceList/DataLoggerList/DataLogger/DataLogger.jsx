import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Pencil, RefreshCcw } from "lucide-react";
import Spinner from "../../../../commons/Spinner";
import ValveCustom from "../../../CustomComponent/ValveCustom/ValveCustom";

export default function DataLogger(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};
  console.log("data", data);
  const [loading, setLoading] = useState(false);

  const handleConnect = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleEdit = () => {
    navigate(`/devices/dataLogger/${data.id}/edit`);
  };

  const handleClick = () => {
    navigate(`/devices/dataLogger/${props.data.id}`, {
      state: props.data,
    });
  };

  const handleActive = (id, state) => {
    console.log(id, state);
  };

  return (
    <div className="md:w-[80%] border p-2 rounded-lg shadow bg-white">
      {!data.id ? (
        <div className="flex justify-between items-center my-1 border rounded p-2">
          <h1 className="font-bold text-gray-700">
            Device #{1008 + Number(props.data.id)}
          </h1>
          <button
            onClick={handleClick}
            className="w-[100px] px-6 py-2 text-base font-medium text-white bg-green-600 rounded hover:bg-green-700"
          >
            Enter
          </button>
        </div>
      ) : (
        <div className="relative flex justify-between items-center border rounded p-2">
          <h1 className="font-bold text-gray-700">
            Device #{1008 + Number(props.data.id)}
          </h1>
          <div className="flex items-center gap-2">
            <div
              onClick={handleConnect}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-2"
            >
              {loading ? <Spinner /> : <RefreshCcw />} <span>call</span>
            </div>
            <div
              onClick={handleEdit}
              className="cursor-pointer border p-2 rounded hover:border-blue-500"
            >
              <Pencil />
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 flex justify-center border rounded p-2">
        <div className="w-[20%]">
          <ValveCustom
            key={`dataLogger`}
            edit={data.id}
            id={`DataLogger`}
            handleActive={handleActive}
            name={`Lock/Clean`}
            border={false}
          />
        </div>
      </div>

      <div className="my-2">
        <table className="w-full text-[15px]">
          <tbody>
            <tr>
              <td className="font-semibold text-left w-1/4">Battery:</td>
              <td className="text-left italic w-1/4">
                {data.Battery}V ({data.BatteryPercent}%)
              </td>
              <td className="font-semibold text-left w-1/4">RTC:</td>
              <td className="text-left w-1/4">{data.RTC}</td>
            </tr>
            <tr>
              <td className="font-semibold text-left">Pressure In:</td>
              <td className="text-left">{data.PressureIn} (bar)</td>
              <td className="font-semibold text-left">Pressure Out:</td>
              <td className="text-left">{data.PressureOut} (bar)</td>
            </tr>
            <tr>
              <td className="font-semibold text-left">Velocity:</td>
              <td className="text-left">{data.Velocity} (m/s)</td>
              <td className="font-semibold text-left">Angle:</td>
              <td className="text-left">{data.Angle}°</td>
            </tr>
            <tr>
              <td className="font-semibold text-left">FlowRate:</td>
              <td className="text-left">{data.FlowRate} (m³/h)</td>
              <td className="font-semibold text-left">Net Flow Total:</td>
              <td className="text-left">{data.NetFlowTotal} (m³)</td>
            </tr>
            <tr>
              <td className="font-semibold text-left">Forward Flow:</td>
              <td className="text-left">{data.ForwardFlow} (m³)</td>
              <td className="font-semibold text-left">Reserve Flow:</td>
              <td className="text-left">{data.ReserveFlow} (m³)</td>
            </tr>
            <tr>
              <td className="font-semibold text-left">User Span:</td>
              <td className="text-left">{data.UserSpan}</td>
              <td className="font-semibold text-left">Low Power Metter:</td>
              <td className="text-left">
                {data.LowPowerMetter ? "True" : "False"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
