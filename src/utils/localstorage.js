import Fuse from "fuse.js";

// Lưu thiết bị vào localStorage (với mảng thiết bị)
export const saveDevice = (deviceType, deviceName, deviceId) => {
  // Lấy danh sách thiết bị hiện tại từ localStorage (hoặc khởi tạo mảng rỗng nếu chưa có dữ liệu)
  const existingDevices = JSON.parse(localStorage.getItem("devices")) || [];

  // Tạo đối tượng thiết bị mới
  const device = {
    deviceType,
    deviceName,
    deviceId,
  };

  // Thêm thiết bị mới vào mảng thiết bị
  existingDevices.push(device);

  // Lưu lại toàn bộ mảng thiết bị vào localStorage
  localStorage.setItem("devices", JSON.stringify(existingDevices));
};

// Lấy danh sách các thiết bị theo loại (deviceType)
export const getDevicesByType = (deviceType) => {
  // Lấy tất cả thiết bị từ localStorage
  const allDevices = JSON.parse(localStorage.getItem("devices")) || [];

  // Lọc các thiết bị theo loại
  return allDevices.filter((device) => device.deviceType === deviceType);
};

export const searchDevice = (searchTerm) => {
  const allDevices = JSON.parse(localStorage.getItem("devices")) || [];

  const options = {
    includeScore: true, // Cho phép trả về điểm số (score)
    keys: ["deviceId", "deviceName"], // Chỉ định các trường để tìm kiếm
  };

  const fuse = new Fuse(allDevices, options);
  const results = fuse
    .search(searchTerm)
    // .filter((result) => result.score < 0.001); // Lọc các kết quả có điểm số thấp hơn 0.3 (có thể điều chỉnh theo nhu cầu)

  const bestResults = results.map((result) => result.item); // Lấy các thiết bị từ kết quả tìm kiếm

  // In ra kết quả
  return bestResults;
};
