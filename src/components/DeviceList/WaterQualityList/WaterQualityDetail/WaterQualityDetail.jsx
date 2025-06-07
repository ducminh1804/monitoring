import { useLocation } from "react-router";

import WaterQuality from "../WaterQuality/WaterQuality";
export default function WaterQualityDetail() {
  const location = useLocation();
  const data = location.state || {};
  // console.log(data);
  return <WaterQuality data={data} />;
}
