import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/AuthSlice";
import LearnChart from "../LearnChart/LearnChart";
import InputDevice from "./InputDevice/InputDevice";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [selectedDevice1, setSelectedDevice1] = useState("dataLogger1");
  const [selectedDevice2, setSelectedDevice2] = useState("");

  const [option, setOption] = useState([
    "Pressure In",
    "Pressure Out",
    "Velocity",
    "Flow Rate",
  ]);

  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  const handleToggleOption = (field) => {
    setOption((prev) => {
      if (prev.length === 1 && prev.includes(field)) return prev;
      return prev.includes(field)
        ? prev.filter((f) => f !== field)
        : [...prev, field];
    });
  };

  useEffect(() => {
    const loadData = async () => {
      const loadExcel = async (path) => {
        const arrayBuffer = await (await fetch(path)).arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, {
          type: "array",
          cellDates: true,
        });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        return XLSX.utils.sheet_to_json(firstSheet, { raw: false });
      };

      const data1 = await loadExcel(`/excels/tb1/2025-06-14.xlsx`);
      const data2 = selectedDevice2
        ? await loadExcel(`/excels/tb2/2025-06-14.xlsx`)
        : [];

      // Chuẩn hóa tên field theo thiết bị
      const renameFields = (row, deviceName) => {
        const renamed = { time: row.time };
        for (const key in row) {
          if (key !== "time") {
            renamed[`${key} (${deviceName})`] = parseFloat(row[key]) || null;
          }
        }
        return renamed;
      };

      const renamedData1 = data1.map((row) =>
        renameFields(row, selectedDevice1)
      );
      const renamedData2 = data2.map((row) =>
        renameFields(row, selectedDevice2)
      );

      // Gộp theo time
      const mergedMap = new Map();

      for (const row of [...renamedData1, ...renamedData2]) {
        const t = row.time;
        if (!mergedMap.has(t)) {
          mergedMap.set(t, { time: t });
        }
        Object.assign(mergedMap.get(t), row);
      }

      const mergedArray = Array.from(mergedMap.values()).sort(
        (a, b) => new Date(a.time) - new Date(b.time)
      );

      setData(mergedArray);
    };

    loadData();
  }, [selectedDevice1, selectedDevice2]);

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
