import React, { useState } from "react";
import { useNavigate } from "react-router";
import { RefreshCcw, Pencil, ChartCandlestick, BookText } from "lucide-react";
import Spinner from "../../../../commons/Spinner";
import val_on from "/svgs/val_on.svg";
import val_off from "/svgs/val_off.svg";
export default function PressureControlDetail() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleConnect = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleEdit = () => {
    navigate(`/main/devices/pressureControl/1/edit`);
  };

  const [valStatus, setValStatus] = useState({
    val_1: false,
    val_2: false,
    val_3: false,
    val_4: false,
  });

  // () de tra ve obj thay cho block scope
  const handleVal = (id) => {
    setValStatus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    console.log(valStatus);
  };

  return (
    <div className="w-[80%] border p-2">
      <div className="flex justify-between items-center ">
        <h1>1008</h1>
        <div
          onClick={handleConnect}
          className="border rounded ml-30 flex gap-2 items-center cursor-pointer hover:bg-gray-200 p-2 rounded-md"
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
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            onClick={() => handleVal(`val_${index + 1}`)}
            key={`val-${index}`}
            className="border w-full rounded  p-2 flex flex-col items-center gap-2"
          >
            <div className="w-[80%] hover:cursor-pointer active:scale-95 transition-all">
              <img
                src={valStatus[`val_${index + 1}`] ? val_on : val_off}
                alt=""
              />
            </div>
            <span>Van {index} </span>
          </div>
        ))}
      </div>

      <div className="my-2">
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
