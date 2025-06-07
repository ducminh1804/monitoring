import { useLocation } from "react-router";
import { RefreshCcw, Pencil, ChartCandlestick, BookText } from "lucide-react";
import Spinner from "../../../../commons/Spinner";
// import val_on from "/svgs/val_on.svg";
// import val_off from "/svgs/val_off.svg";
import PressureControl from "../PressureControl/PressureControls";
export default function PressureControlDetail() {
  const location = useLocation();

  const data = location.state || {};
  console.log("id", data.id);


  return (
    <div className="mb-2">
      <PressureControl data={data} />
    </div>
  );
}
