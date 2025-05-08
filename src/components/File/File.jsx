import React, { useState } from "react";
import * as XLSX from "xlsx";
import Chart from "../Chart/Chart";
import { convertToUnixTimestamp } from "../../utils/date";
import { eachDayOfInterval, format } from "date-fns";
import { Download } from "lucide-react";
export default function FileLoader() {
  const [result, setResult] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const loadExcelFile = async (dateString) => {
    try {
      const response = await fetch(`/excel/${dateString}.xlsx`);
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(new Uint8Array(arrayBuffer), {
        type: "array",
        cellDates: true,
      });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: false });

      return jsonData.map((item) => ({
        ...item,
        time: convertToUnixTimestamp(item.time) + 25200,
      }));
    } catch (err) {
      console.warn(`Không tìm thấy file: ${dateString}.xlsx`);
      return [];
    }
  };

  const handleLoadData = async () => {
    const dates = eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    });

    const dateStrings = dates.map((d) => format(d, "ddMMyy"));
    const allData = await Promise.all(dateStrings.map(loadExcelFile));

    setResult(allData.flat());
  };

  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = "/excel/010425.xlsx"; // đường dẫn tương đối tính từ public
    link.href = "/excel/020425.xlsx"; // đường dẫn tương đối tính từ public
    link.href = "/excel/030425.xlsx"; // đường dẫn tương đối tính từ public

    link.download = "report.xlsx"; // tên gợi ý khi tải về
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const deviceList = ["TB1", "TB2", "TB3", "TB4"];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDevices, setFilteredDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = deviceList.filter((device) =>
      device.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDevices(filtered);
  };

  const handleSelect = (device) => {
    setSelectedDevice(device);
    setSearchTerm(device);
    setFilteredDevices([]); // Ẩn dropdown sau khi chọn
  };

    const deviceList1 = ["TB1", "TB2", "TB3", "TB4"];
    const [searchTerm1, setSearchTerm1] = useState("");
    const [filteredDevices1, setFilteredDevices1] = useState([]);
    const [selectedDevice1, setSelectedDevice1] = useState("");

    const handleChange1 = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      const filtered = deviceList.filter((device) =>
        device.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredDevices(filtered);
    };

    const handleSelect1 = (device) => {
      setSelectedDevice(device);
      setSearchTerm(device);
      setFilteredDevices([]); // Ẩn dropdown sau khi chọn
    };


  return (
    <div className="space-y-4">
      <div className="flex justify-around items-center">
        {/* input */}
        <div className="mr-20 flex">
          <div className="mr-20 relative w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Tìm thiết bị..."
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {filteredDevices.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-40 overflow-y-auto">
                {filteredDevices.map((device, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(device)}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {device}
                  </li>
                ))}
              </ul>
            )}
            {selectedDevice && (
              <p className="mt-2">Thiết bị đã chọn: {selectedDevice}</p>
            )}
          </div>

          {/* tb2 */}
          <div className="mr-20 relative w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Tìm thiết bị..."
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {filteredDevices.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-40 overflow-y-auto">
                {filteredDevices.map((device, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(device)}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {device}
                  </li>
                ))}
              </ul>
            )}
            {selectedDevice && (
              <p className="mt-2">Thiết bị đã chọn: {selectedDevice}</p>
            )}
          </div>
        </div>
        {/* action */}
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border px-2 py-1"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border px-2 py-1"
          />
          <button
            onClick={handleLoadData}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Load Data
          </button>

          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white px-4 py-1 rounded active:scale-95 transition-all"
          >
            <Download />
          </button>
        </div>
      </div>

      <Chart result={result} />
    </div>
  );
}
