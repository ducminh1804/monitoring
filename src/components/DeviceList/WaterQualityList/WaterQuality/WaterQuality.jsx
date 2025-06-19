import { Book, ChartCandlestick, Pencil, RefreshCcw } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Spinner from "../../../../commons/Spinner";
import val_on from "/svgs/val_on.svg";
import val_off from "/svgs/val_off.svg";
import ValveCustom from "../../../CustomComponent/ValveCustom/ValveCustom";

export default function WaterQuality(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    console.log("object");
    navigate(`/devices/waterQuality/${props.data.id}`, {
      state: props.data,
    });
  };
  const [loading, setLoading] = useState(false);
  const handleConnect = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const id = location.state?.id;
  console.log("id", id);

  const handleEdit = () => {
    navigate(`/devices/waterQuality/${id}/edit`);
  };

  const handleInfo = () => {
    navigate(`/devices/waterQuality/${id}/info`);
  };

  const [valStatus, setValStatus] = useState({
    val_1: false,
    val_2: false,
    val_3: false,
    val_4: false,
  });

  const [active, setActive] = useState(false);
  const handleActive = (id, name, state) => {
    console.log(id, name, state);
  };
  return (
    <div>
      <div className="md:w-[80%] mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <div>
          {!id ? (
            <div className="flex justify-between items-center my-1 border rounded p-2">
              <h1 className="font-bold text-gray-700">
                Device #{1008 + Number(props.data.id)}
              </h1>{" "}
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
                  onClick={handleInfo}
                  className="ml-10 cursor-pointer active:scale-95 transition-all border border-gray-300 hover:border-blue-500 p-2 rounded"
                >
                  <Book />
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

        <div className="mt-4  flex items-center justify-center rounded border">
          <div className="w-[20%]">
            <ValveCustom
              key={`dataLogger`}
              edit={id}
              id={`DataLogger`}
              handleActive={handleActive}
              name={`Low Power Mode`}
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
                <td className="font-semibold text-left">Clo:</td>
                <td className="text-left">{props.data.Clo} (mg/l)</td>
                <td className="font-semibold text-left">pH:</td>
                <td className="text-left">{props.data.pH} (pH)</td>
              </tr>
              <tr>
                <td className="font-semibold text-left">Turbidity:</td>
                <td className="text-left">{props.data.Turbidity} (NTU)</td>
                <td className="font-semibold text-left">Conductivity:</td>
                <td className="text-left">{props.data.Conductivity} (uS/cm)</td>
              </tr>
              <tr>
                <td className="font-semibold text-left">
                  Công suất tiêu thụ/ngày:
                </td>
                <td className="text-left">{props.data.Index5}</td>
                <td className="font-semibold text-left">
                  Thời gian sử dụng ước tính còn lại:
                </td>
                <td className="text-left">{props.data.Index6}</td>
              </tr>
              <tr>
                <td className="font-semibold text-left">Chỉ số 7:</td>
                <td className="text-left">{props.data.Index7}</td>
                <td className="font-semibold text-left">Chỉ số 8:</td>
                <td className="text-left">{props.data.Index8}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
