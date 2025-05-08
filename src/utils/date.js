export const convertExcelSerialToDate = (serialDate) => {
  const epoch = new Date(1900, 0, 1); // Ngày 1/1/1900 là mốc của Excel
  const jsDate = new Date(epoch.getTime() + (serialDate - 2) * 86400000); // 86400000 ms = 1 ngày

  // Lấy ngày, tháng, năm, giờ và phút
  const day = jsDate.getDate(); // Không cần padStart vì bạn muốn không có số 0
  const month = jsDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên phải cộng thêm 1
  const year = jsDate.getFullYear();
  let hours = jsDate.getHours();
  let minutes = jsDate.getMinutes();

  // Làm tròn phút về bội số của 5
  minutes = Math.floor(minutes / 5) * 5;

  // Định dạng ngày tháng theo d/m/yyyy h:mm
  return `${day}/${month}/${year} ${hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
};

// Test với serial number 45661
export function convertToUnixTimestamp(dateString) {
  // Giả sử định dạng là dd/mm/yy hh:mm hoặc d/m/yy hh:mm
  const [datePart, timePart] = dateString.split(" ");
  const [day, month, year] = datePart.split("/").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);

  // Năm '25' → 2025 (nếu <= 30 thì là 20xx)
  const fullYear = year < 30 ? 2000 + year : 1900 + year;

  const dateObj = new Date(fullYear, month - 1, day, hour, minute);
  return Math.floor(dateObj.getTime() / 1000); // trả về timestamp tính bằng giây
}
