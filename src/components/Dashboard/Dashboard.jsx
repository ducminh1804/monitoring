import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/AuthSlice";
import LearnChart from "../LearnChart/LearnChart";
import InputDevice from "./InputDevice/InputDevice";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [selectedDevice1, setSelectedDevice1] = useState("dataLogger1");
  const [selectedDevice2, setSelectedDevice2] = useState("valve1");

  // ✅ Mặc định chọn cả 4 option
  const [option, setOption] = useState([
    "Pressure In",
    "Pressure Out",
    "Velocity",
    "Flow Rate",
  ]);

  useEffect(() => {
    const loadExcel = async () => {
      const url = "/excels/tb1/2025-01-01.xlsx";
      const arrayBuffer = await (await fetch(url)).arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, {
        type: "array",
        cellDates: true,
      });
      const first_sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(first_sheet, { raw: false });
      setData(jsonData);
    };
    loadExcel();
  }, []);

  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  const handleToggleOption = (field) => {
    setOption((prev) => {
      if (prev.length === 1 && prev.includes(field)) {
        // alert("Phải chọn ít nhất một thuộc tính!");
        return prev; // giữ nguyên, không thay đổi
      }

      return prev.includes(field)
        ? prev.filter((f) => f !== field) // xoá
        : [...prev, field]; // thêm
    });
  };

  return (
    <div className="h-screen flex flex-col p-4 box-border overflow-hidden">
      <InputDevice
        selectedDevice1={selectedDevice1}
        selectedDevice2={selectedDevice2}
        onDevice1Change={setSelectedDevice1}
        onDevice2Change={setSelectedDevice2}
        option={option}
        onToggleOption={handleToggleOption}
      />

      <div className="flex-grow overflow-auto mt-4">
        <LearnChart
          data={data}
          selectedDevice1={selectedDevice1}
          selectedDevice2={selectedDevice2}
          option={option}
        />
      </div>
    </div>
  );
}
