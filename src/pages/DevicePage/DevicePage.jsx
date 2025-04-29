import React, { useState } from "react";
import Button from "../../commons/Button";
import AddDevice from "../../components/AddDevice/AddDevice";
import DeviceTypeList from "../../components/DeviceTypeList/DeviceTypeList";
export default function DevicePage() {
  const [add, setAdd] = useState(false);
  const [action, setAction] = useState("Thêm thiết bị");
  const devices = [
    {
      id: "pressureControl",
      name: "Thiết bị điều kiện áp lực",
      color: "border-blue-500",
    },
    { id: "dataLogger", name: "Data Logger", color: "border-green-500" },
    {
      id: "valveBreaker",
      name: "Đóng ngắt van bướm",
      color: "border-yellow-500",
    },
    {
      id: "waterQuality",
      name: "Tủ chất lượng nước",
      color: "border-purple-500",
    },
    { id: "other", name: "Thiết bị khác", color: "border-gray-500" },
  ];
  const handleAdd = () => {
    setAdd(!add);

    !add && action === "Thêm thiết bị"
      ? setAction("Hủy")
      : setAction("Thêm thiết bị");
  };
  return (
    <div>
      <div>
        <div onClick={handleAdd}>
          <Button action={action} />
        </div>
        <div>{add && <AddDevice />}</div>
      </div>
      <div>
        <DeviceTypeList type={devices} />
      </div>
    </div>
  );
}
