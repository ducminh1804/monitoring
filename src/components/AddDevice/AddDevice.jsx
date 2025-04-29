import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveDevice } from "../../utils/localstorage";

function AddDevice() {
  const [deviceType, setDeviceType] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [idError, setIdError] = useState("");
  const navigate = useNavigate();

  // ➡️ Generate ID 4 chữ số
  const generateRandomId = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  // ➡️ Khi chọn loại thiết bị => luôn tự động tạo ID
  useEffect(() => {
    if (deviceType) {
      const newId = generateRandomId();
      setDeviceId(newId);
      setIdError("");
    } else {
      setDeviceId("");
      setIdError("");
    }
  }, [deviceType]);

  const validateId = (id) => {
    const regex = /^[0-9]{4}$/; // chỉ đúng 4 số
    return regex.test(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateId(deviceId)) {
      setIdError("ID thiết bị phải gồm đúng 4 chữ số!");
      return;
    }
    console.log("Loại thiết bị:", deviceType);
    console.log("Tên thiết bị:", deviceName);
    console.log("ID thiết bị:", deviceId);

    saveDevice(deviceType, deviceName, deviceId);
    navigate("/main/devices");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">Tạo Thiết Bị</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Loại thiết bị */}
        <div className="flex flex-col">
          <label htmlFor="deviceType" className="mb-1 font-medium">
            Chọn loại thiết bị:
          </label>
          <select
            id="deviceType"
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Chọn loại thiết bị --</option>
            <option value="pressureControl">Thiết bị điều kiện áp lực</option>
            <option value="dataLogger">Data Logger</option>
            <option value="valveBreaker">Đóng ngắt van bướm</option>
            <option value="waterQuality">Tủ chất lượng nước</option>
            <option value="other">Thiết bị khác</option>
          </select>
        </div>

        {/* ID thiết bị */}
        {deviceType && (
          <div className="flex flex-col">
            <label htmlFor="deviceId" className="mb-1 font-medium">
              ID thiết bị:
            </label>
            <input
              type="text"
              id="deviceId"
              value={deviceId}
              onChange={(e) => {
                setDeviceId(e.target.value);
                setIdError("");
              }}
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {idError && <p className="text-red-500 text-sm mt-1">{idError}</p>}
          </div>
        )}

        {/* Tên thiết bị */}
        <div className="flex flex-col">
          <label htmlFor="deviceName" className="mb-1 font-medium">
            Tên thiết bị:
          </label>
          <input
            type="text"
            id="deviceName"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200"
          >
            Tạo Thiết Bị
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDevice;
