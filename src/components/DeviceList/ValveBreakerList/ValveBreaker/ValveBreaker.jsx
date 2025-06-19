import { ChartCandlestick, Pencil, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import val_on from "/svgs/val_on.svg";
import val_off from "/svgs/val_off.svg";
import Spinner from "../../../../commons/Spinner";
import ValveCustom from "../../../CustomComponent/ValveCustom/ValveCustom";

export default function ValveBreaker(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;
  const handleClick = () => {
    navigate(`/devices/valveBreaker/${props.data.id}`, {
      state: props.data,
    });
  };

  const [valStatus, setValStatus] = useState({
    val_1: false,
    val_2: false,
    val_3: false,
    val_4: false,
  });

  const [loading, setLoading] = useState(false);

  const handleConnect = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleEdit = () => {
    navigate(`/devices/valveBreaker/${id}/edit`);
  };
  const handleActive = (id, name, state) => {
    console.log(id, name, state);
  };
  return (
    <div className="md:w-[80%]  mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <div>
        {!id ? (
          <div className="flex justify-between items-center my-1 border rounded p-2">
            <h1 className="font-bold text-gray-700">
              Device #{Number(props.data.name)}
            </h1>{" "}
            thong so hien thi dma
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
            <h1 className="font-bold text-gray-700">
              Device #{1008 + Number(props.data.id)}
            </h1>{" "}
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

      <div className="flex justify-center mt-4 gap-2">
        <ValveCustom
          key={`dataLogger-1`}
          edit={id}
          id={`DataLogger`}
          handleActive={handleActive}
          name={`Mode 1`}
        />
        <ValveCustom
          key={`dataLogger-2`}
          edit={id}
          id={`DataLogger`}
          handleActive={handleActive}
          name={`Mode 2`}
        />
        <ValveCustom
          key={`dataLogger-3`}
          edit={id}
          id={`DataLogger`}
          handleActive={handleActive}
          name={`Lock`}
        />
      </div>

      <div className="my-2">
        <table className="w-full text-[15px]">
          <tbody>
            <tr>
              <td className="font-semibold text-left w-1/4">Battery:</td>
              <td className="text-left italic w-1/4">
                {props.data.Battery}V ({props.data.BatteryPercent}%)
              </td>
              <td className="font-semibold text-left w-1/4">RTC:</td>
              <td className="text-left w-1/4">{props.data.RTC}</td>
            </tr>
            <tr>
              <td className="font-semibold text-left">Pressure In:</td>
              <td className="text-left">{props.data.PressureIn} (bar)</td>
              <td className="font-semibold text-left">Pressure Out:</td>
              <td className="text-left">{props.data.PressureOut} (bar)</td>
            </tr>
            <tr>
              <td className="font-semibold text-left">Velocity:</td>
              <td className="text-left">{props.data.Velocity} (m/s)</td>
              <td className="font-semibold text-left">Angle:</td>
              <td className="text-left">{props.data.Angle}°</td>
            </tr>
            <tr>
              <td className="font-semibold text-left">FlowRate:</td>
              <td className="text-left">{props.data.FlowRate} (m³/h)</td>
              <td className="font-semibold text-left">Net Flow Total:</td>
              <td className="text-left">{props.data.NetFlowTotal} (m³)</td>
            </tr>
            <tr>
              <td className="font-semibold text-left">Forward Flow:</td>
              <td className="text-left">{props.data.ForwardFlow} (m³)</td>
              <td className="font-semibold text-left">Reserve Flow:</td>
              <td className="text-left">{props.data.ReserveFlow} (m³)</td>
            </tr>
            <tr>
              <td className="font-semibold text-left">User Span:</td>
              <td className="text-left">{props.data.UserSpan}</td>
              <td className="font-semibold text-left">Low Power Metter:</td>
              <td className="text-left">
                {props.data.LowPowerMetter ? "True" : "False"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
