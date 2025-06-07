import React from "react";
import ActiveBtn from "../../../../commons/ActiveBtn";
import BaseConfig from "../../../DeviceEditor/BaseConfig";
export default function WaterQualityEdit() {
  return (
    <div>
      <BaseConfig/>
      <ul className="divide-y divide-gray-200">
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
