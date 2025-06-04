import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { RefreshCcw, Pencil, ChartCandlestick, BookText } from "lucide-react";
import Spinner from "../../../../commons/Spinner";
import val_on from "/svgs/val_on.svg";
import val_off from "/svgs/val_off.svg";
import PressureControl from "../PressureControl/PressureControls";
export default function PressureControlDetail() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state || {};
  console.log("id", data.id);

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
    <div className="mb-2">
      <PressureControl data={data} />
    </div>
  );
}
