import {  useEffect, useState } from "react";
import * as XLSX from "xlsx";
import LearnChart from "../LearnChart/LearnChart";
import { useDispatch } from "react-redux";
import { login, logout } from "../../redux/slices/AuthSlice";

export default function Dashboard() {
  const [data, setData] = useState([]);
  // k dc dung async trong useEffect
  useEffect(() => {
    const loadExcel = async () => {
      const url = "/excels/2025-04-01.xlsx";
      const arrayBuffer = await (await fetch(url)).arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, {
        type: "array",
        cellDates: true,
      });
      var first_sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(first_sheet, { raw: false });
      setData(jsonData);
    };
    loadExcel();
  }, []);
  // console.log(data);

  const dispatch = useDispatch()
  const handleLogin = () => {
    dispatch(logout())
  }
  return (
    <div>
      <button onClick={handleLogin}>click</button>
      <LearnChart data={data} />
    </div>
  );
}
