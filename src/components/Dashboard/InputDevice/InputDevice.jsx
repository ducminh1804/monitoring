export default function InputDevice({
  selectedDevice1,
  selectedDevice2,
  onDevice1Change,
  onDevice2Change,
  option,
  onToggleOption,
}) {
  const DEVICE_OPTIONS_1 = [
    { label: "Data Logger 1", value: "dataLogger1" },
    { label: "Data Logger 2", value: "dataLogger2" },
    { label: "Data Logger 3", value: "dataLogger3" },
  ];
  const DEVICE_OPTIONS_2 = [
    { label: "", value: "" },
    { label: "Valve 1", value: "valve1" },
    { label: "Valve 2", value: "valve2" },
    { label: "Valve 3", value: "valve3" },
  ];

  const chartFields = ["Pressure In", "Pressure Out", "Velocity", "Flow Rate"];

  return (
    <div className="flex flex-wrap items-center gap-4 mb-2">
      {/* Select Device 1 */}
      <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1">
        <label htmlFor="device1" className="text-sm font-medium">
          Thiết bị 1:
        </label>
        <select
          id="device1"
          value={selectedDevice1}
          onChange={(e) => onDevice1Change(e.target.value)}
          className="text-sm border border-gray-300 rounded px-2 py-1"
        >
          {DEVICE_OPTIONS_1.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Select Device 2 */}
      <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1">
        <label htmlFor="device2" className="text-sm font-medium">
          Thiết bị 2:
        </label>
        <select
          id="device2"
          value={selectedDevice2}
          onChange={(e) => onDevice2Change(e.target.value)}
          className="text-sm border border-gray-300 rounded px-2 py-1"
        >
          {DEVICE_OPTIONS_2.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Checkbox Options */}
      <div className="flex items-center gap-3 border border-gray-300 rounded px-3 py-1">
        <span className="text-sm font-medium">Hiển thị:</span>
        {chartFields.map((field) => (
          <label key={field} className="flex items-center gap-1 text-sm">
            <input
              type="checkbox"
              checked={option.includes(field)}
              onChange={() => onToggleOption(field)}
              disabled={option.length === 1 && option.includes(field)}
            />
            {field}
          </label>
        ))}
      </div>
    </div>
  );
}
