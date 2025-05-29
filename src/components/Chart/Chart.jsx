import * as echarts from "echarts";


const Chart = (props) => {
  const { result } = props;
  console.log(result);
  return (
    <div>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="flex gap-2">
          <div className="w-1/4">{result[index]?.PressureIn}</div>
          <div className="w-1/4">{result[index]?.PressureOut}</div>
          <div className="w-1/4">{result[index]?.Velocity}</div>
          <div className="w-1/4">{result[index]?.FlowRate}</div>
        </div>
      ))}
    </div>
  );
};

export default Chart;

// {
//   "time": 1743465600,
//   "Pressure In": "2.33",
//   "Pressure Out": "1.6",
//   "Velocity": "0.12",
//   "Flow Rate": "7.36"
// }
