import * as XLSX from "xlsx";

export const handleFileUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    console.log(jsonData); // Đây là mảng object có thể dùng cho Recharts
  };

  reader.readAsArrayBuffer(file);
};
