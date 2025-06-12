import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 🔧 Danh sách thiết bị giả lập
const FAKE_DEVICES = [
  { id: "0001", name: "Data Logger 1", type: "dataLogger" },
  { id: "0002", name: "Data Logger 2", type: "dataLogger" },
  { id: "0003", name: "Data Logger 3", type: "dataLogger" },

  { id: "0004", name: "Pressure Control 1", type: "pressureControl" },
  { id: "0005", name: "Pressure Control 2", type: "pressureControl" },
  { id: "0006", name: "Pressure Control 3", type: "pressureControl" },

  { id: "0007", name: "Valve Breaker 1", type: "valveBreaker" },
  { id: "0008", name: "Valve Breaker 2", type: "valveBreaker" },
  { id: "0009", name: "Valve Breaker 3", type: "valveBreaker" },

  { id: "0010", name: "Water Quality 1", type: "waterQuality" },
  { id: "0011", name: "Water Quality 2", type: "waterQuality" },
  { id: "0012", name: "Water Quality 3", type: "waterQuality" },
];

// 🔧 Mapping type → label mô tả
const DEVICE_TYPE_LABELS = {
  pressureControl: "Thiết bị điều kiện áp lực",
  dataLogger: "Data Logger",
  valveBreaker: "Đóng ngắt van bước tự động",
  waterQuality: "Tủ chất lượng nước",
};

export default function FindDevice() {
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate();

  const filteredDevices = FAKE_DEVICES.filter((device) => {
    const matchId =
      searchId.trim() === "" || device.id.includes(searchId.trim());
    const matchName =
      searchName.trim() === "" ||
      device.name.toLowerCase().includes(searchName.toLowerCase());
    return matchId && matchName;
  });

  const handleClick = (device) => {
    navigate(`/devices/${device.type}/${device.id}`);
  };

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h3 className="text-base font-semibold mb-2">🔍 Tìm thiết bị</h3>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Nhập ID thiết bị (VD: 0001)..."
          className="border px-2 py-1 rounded text-sm"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />

        <input
          type="text"
          placeholder="Nhập tên thiết bị (VD: Data Logger)..."
          className="border px-2 py-1 rounded text-sm"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />

        <div className="mt-3 max-h-48 overflow-y-auto border rounded p-2 bg-gray-50 text-sm">
          {filteredDevices.length === 0 ? (
            <p className="text-gray-500 italic">
              Không tìm thấy thiết bị phù hợp.
            </p>
          ) : (
            filteredDevices.map((device) => (
              <div
                key={device.id}
                onClick={() => handleClick(device)}
                className="p-2 rounded hover:bg-blue-100 cursor-pointer transition"
              >
                <div className="font-medium">
                  {device.name} (ID: {device.id})
                </div>
                <div className="text-xs text-gray-500">
                  {DEVICE_TYPE_LABELS[device.type]}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
