import { Book, ChartCandlestick, Pencil, RefreshCcw } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Spinner from "../../../../commons/Spinner";
import val_on from "/svgs/val_on.svg";
import val_off from "/svgs/val_off.svg";

export default function WaterQuality(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    console.log("object");
    navigate(`/main/devices/waterQuality/${props.data.id}`, {
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
    navigate(`/main/devices/waterQuality/${id}/edit`);
  };

  const handleInfo = () => {
    navigate(`/main/devices/waterQuality/${id}/info`);
  };


  const [valStatus, setValStatus] = useState({
    val_1: false,
    val_2: false,
    val_3: false,
    val_4: false,
  });

  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="md:w-[80%] mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <div>
          {!id ? (
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

        <div className="flex justify-center mt-4 ">
          <div className="border w-full rounded  p-2 flex flex-col items-center gap-2">
            <div onClick={() => setActive((prev) => !prev)} className="w-[20%]">
              <img src={active ? val_on : val_off} alt="" />
            </div>
            <span>Lock/Clean </span>
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
