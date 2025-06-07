import { useLocation } from "react-router";
import DataLogger from "../DataLogger/DataLogger";

export default function DataLoggerDetail() {
  const location = useLocation();
  const data = location.state || {};
  console.log(data)
  return <DataLogger data={data} />;
}
