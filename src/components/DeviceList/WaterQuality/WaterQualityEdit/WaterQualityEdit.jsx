import React from "react";
import ActiveBtn from "../../../../commons/ActiveBtn";
export default function WaterQualityEdit() {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        <li className="py-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2 text-blue-500"
            >
              <path d="M2 13.5V22H7V16H11V22H16V13.5L12 10L7 13.5V7H10V2H14V7H17V13.5L21 17L2 21.5L2 13.5Z" />
            </svg>
            <div className="flex flex-col">
              <span className="font-medium">Tên thiết bị</span>
              <span className="text-gray-500">1008</span>
            </div>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2 text-blue-500"
            >
              <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v13A3.5 3.5 0 0 0 5.5 22h13a3.5 3.5 0 0 0 3.5-3.5v-13A3.5 3.5 0 0 0 18.5 2H5.5ZM20 18.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13Z" />
            </svg>
            <div className="flex flex-col">
              <span className="font-medium">Model</span>
              <span className="text-gray-500">WC4B4R-W</span>
            </div>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2 text-blue-500"
            >
              <path d="M12 2a9 9 0 0 0-9 9v7c0 1.105.895 2 2 2a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2c0-1.105.895-2 2-2v-7a9 9 0 0 0-9-9Zm7 9c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h10c1.105 0 2 .895 2 2v4Z" />
            </svg>
            <div className="flex flex-col">
              <span className="font-medium">Id</span>
              <span className="text-gray-500">1008</span>
            </div>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2 text-blue-500"
            >
              <path d="M12 2a9 9 0 0 0-9 9v7c0 1.105.895 2 2 2a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2c0-1.105.895-2 2-2v-7a9 9 0 0 0-9-9Zm7 9c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h10c1.105 0 2 .895 2 2v4Z" />
            </svg>
            <div className="flex flex-col">
              <span className="font-medium">Hardware Version</span>
              <span className="text-gray-500">WC4B4R-W-0.1</span>
            </div>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium">Đồng bộ RTC cho module</span>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium">History Data</span>
          </div>
        </li>
        {/* Các mục dưới đây được chuyển thành input */}
        <li className="py-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex flex-col">
              <label htmlFor="responseTime" className="font-medium">
                Response Time
              </label>
              <input
                id="responseTime"
                type="text"
                defaultValue="0s"
                className="text-gray-500 bg-transparent outline-none"
              />
            </div>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex flex-col">
              <label htmlFor="intervalReadPressure" className="font-medium">
                Interval Read Pressure
              </label>
              <input
                id="intervalReadPressure"
                type="text"
                defaultValue="0s"
                className="text-gray-500 bg-transparent outline-none"
              />
            </div>
          </div>
        </li>

        <li className="py-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex flex-col">
              <label htmlFor="intervalReadMetter" className="font-medium">
                Interval Read Metter
              </label>
              <input
                id="intervalReadMetter"
                type="text"
                defaultValue="0s"
                className="text-gray-500 bg-transparent outline-none"
              />
            </div>
          </div>
        </li>

        <div className="bg-gray-400 flex items-center justify-between">
          <h3 className=" font-bold p-1">Thiết lập Power Mode</h3>
          <ActiveBtn/>
        </div>
        <li className="py-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex flex-col">
              <label htmlFor="intervalReadMetter" className="font-medium">
                Thiết lập kích hoạt Low Power Mode
              </label>
              <div className="flex items-center">
                <span className="pr-2">Điện áp:</span>
                <input
                  id="intervalReadMetter"
                  type="number"
                  defaultValue=""
                  className="border  rounded p-2 w-[130px] text-gray-500 bg-transparent outline-none"
                />
                <span className="pl-2 text-gray-500 bg-transparent outline-none">
                  ( &le;V )
                </span>
              </div>
            </div>
          </div>
        </li>

        <div className="bg-gray-400 flex items-center justify-between">
          <h3 className=" font-bold p-1">Thiết lập ngưỡng đo</h3>
        </div>

        <li className="py-4">
          <div className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mt-1 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Chỉ số 5</label>
              <div className="flex gap-6">
                {/* Min */}
                <div className="flex flex-col">
                  <label htmlFor="min" className="font-medium">
                    Min
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      id="min"
                      type="number"
                      defaultValue={0}
                      className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                    />
                    <span className="text-sm text-gray-500">(m³)</span>
                  </div>
                </div>
                {/* Max */}
                <div className="flex flex-col">
                  <label htmlFor="max" className="font-medium">
                    Max
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      id="max"
                      type="number"
                      defaultValue={0}
                      className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                    />
                    <span className="text-sm text-gray-500">(m³)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="py-4">
          <div className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mt-1 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Chỉ số 6</label>
              <div className="flex gap-6">
                {/* Min */}
                <div className="flex flex-col">
                  <label htmlFor="min" className="font-medium">
                    Min
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      id="min"
                      type="number"
                      defaultValue={0}
                      className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                    />
                    <span className="text-sm text-gray-500">(m³)</span>
                  </div>
                </div>
                {/* Max */}
                <div className="flex flex-col">
                  <label htmlFor="max" className="font-medium">
                    Max
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      id="max"
                      type="number"
                      defaultValue={0}
                      className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                    />
                    <span className="text-sm text-gray-500">(m³)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="py-4">
          <div className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mt-1 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Chỉ số 7</label>
              <div className="flex gap-6">
                {/* Min */}
                <div className="flex flex-col">
                  <label htmlFor="min" className="font-medium">
                    Min
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      id="min"
                      type="number"
                      defaultValue={0}
                      className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                    />
                    <span className="text-sm text-gray-500">(m³)</span>
                  </div>
                </div>
                {/* Max */}
                <div className="flex flex-col">
                  <label htmlFor="max" className="font-medium">
                    Max
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      id="max"
                      type="number"
                      defaultValue={0}
                      className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                    />
                    <span className="text-sm text-gray-500">(m³)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="py-4">
          <div className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mt-1 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Chỉ số 8</label>
              <div className="flex gap-6">
                {/* Min */}
                <div className="flex flex-col">
                  <label htmlFor="min" className="font-medium">
                    Min
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      id="min"
                      type="number"
                      defaultValue={0}
                      className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                    />
                    <span className="text-sm text-gray-500">(m³)</span>
                  </div>
                </div>
                {/* Max */}
                <div className="flex flex-col">
                  <label htmlFor="max" className="font-medium">
                    Max
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      id="max"
                      type="number"
                      defaultValue={0}
                      className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                    />
                    <span className="text-sm text-gray-500">(m³)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="flex items-start gap-2 pb-4">
          <span className="w-6 h-6 mt-1 text-blue-500">🧪</span>
          <div className="flex flex-col">
            <label className="font-medium mb-2">Clo</label>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <label className="font-medium">Min</label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min={0.2}
                    defaultValue={0.2}
                    className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                  />
                  <span className="text-sm text-gray-500">(mg/l)</span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Max</label>
                <div className="flex items-center gap-1">
                  <input
                    max={1}
                    type="number"
                    defaultValue={1}
                    className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                  />
                  <span className="text-sm text-gray-500">(mg/l)</span>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* pH */}
        <li className="flex items-start gap-2 pb-4">
          <span className="w-6 h-6 mt-1 text-green-500">⚗️</span>
          <div className="flex flex-col">
            <label className="font-medium mb-2">pH</label>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <label className="font-medium">Min</label>
                <input
                  type="number"
                  defaultValue={6}
                  min={6}
                  className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Max</label>
                <input
                  max={8.5}
                  type="number"
                  defaultValue={8.5}
                  className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                />
              </div>
            </div>
          </div>
        </li>

        {/* Turbidity */}
        <li className="flex items-start gap-2 pb-4">
          <span className="w-6 h-6 mt-1 text-yellow-500">💧</span>
          <div className="flex flex-col">
            <label className="font-medium mb-2">Turbidity</label>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <label className="font-medium">Min</label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min={0}
                    defaultValue={0}
                    className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                  />
                  <span className="text-sm text-gray-500">(NTU)</span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Max</label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    max={2}
                    defaultValue={2}
                    className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                  />
                  <span className="text-sm text-gray-500">(NTU)</span>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* Conductivity */}
        <li className="flex items-start gap-2 pb-4">
          <span className="w-6 h-6 mt-1 text-purple-500">🔌</span>
          <div className="flex flex-col">
            <label className="font-medium mb-2">Conductivity</label>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <label className="font-medium">Min</label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min={0}
                    defaultValue={0}
                    className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                  />
                  <span className="text-sm text-gray-500">(uS/cm)</span>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Max</label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    max={1000}
                    defaultValue={1000}
                    className="text-gray-500 bg-transparent outline-none border px-2 py-1 rounded w-24"
                  />
                  <span className="text-sm text-gray-500">(uS/cm)</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

// Forward Flow: 0 (m³)

// Reserve Flow: 0 (m³)

// User Span: 0

// Low Power Metter: False
