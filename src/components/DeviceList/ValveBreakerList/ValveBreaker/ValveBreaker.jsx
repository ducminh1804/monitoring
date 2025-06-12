import { ChartCandlestick, Pencil, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import val_on from "/svgs/val_on.svg";
import val_off from "/svgs/val_off.svg";
import Spinner from "../../../../commons/Spinner";

export default function ValveBreaker(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;
  console.log(id);
  const handleClick = () => {
    console.log("object");
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
  return (
    <div className="md:w-[80%]  mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <div>
        {!id ? (
          <div className="flex justify-between items-center my-1 border rounded p-2">
            <h1>{1008 + Number(props.data.id)}</h1>
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
            <h1>{1008 + Number(props.data.id)}</h1>
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
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`val-${index}`}
            className="border w-full rounded  p-2 flex flex-col items-center gap-2"
          >
            <div className="w-[80%] ">
              <img
                src={valStatus[`val_${index + 1}`] ? val_on : val_off}
                alt=""
              />
            </div>
            <span>Van {index + 1} </span>
          </div>
        ))}
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
          <p>Velocity: {props.data.Velocity} (m/s)</p>
          <p>Angle: {props.data.Angle}°</p>
        </div>{" "}
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
