import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Chart from "../Chart/Chart";
import { convertExcelSerialToDate } from "../../utils/date"; // Đảm bảo hàm này đã được định nghĩa đúng

export default function File() {
  const [result, setResult] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Chuyển đổi tất cả các giá trị time từ serial number sang định dạng ngày giờ
      const convertedData = jsonData.map((item) => ({
        ...item,
        time: convertExcelSerialToDate(item.time), // Chuyển đổi time
      }));

      setResult(convertedData); // Lưu dữ liệu đã chuyển đổi vào state
    };

    reader.readAsArrayBuffer(file);
  };

  useEffect(() => {
    // Nếu cần, có thể thực hiện các thao tác với result sau khi đã cập nhật.
  }, [result]);

//   console.log(result); // Dữ liệu đã được xử lý

  return (
    <div>
      <div className="border">
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      </div>
      <div className="">
        <Chart result={result} />{" "}
        {/* Truyền dữ liệu đã xử lý cho component Chart */}
      </div>
    </div>
  );
}
