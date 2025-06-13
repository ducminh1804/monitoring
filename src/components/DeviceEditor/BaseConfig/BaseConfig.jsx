import React from "react";

export default function BaseConfig() {
  return (
    <div>
      <ul>
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
          {/* Tiêu đề GPS */}
          <div className="flex items-center mb-1">
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
                d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 3a6 6 0 016 6c0 1.657-.672 3.157-1.758 4.243A5.978 5.978 0 0112 18a5.978 5.978 0 01-4.242-1.757A6.001 6.001 0 0112 6z"
              />
            </svg>
            <span className="font-medium">GPS</span>
          </div>

          {/* Input + Icon mở Google Maps */}
          <div className="flex items-center gap-2 ml-8">
            <input
              type="text"
              value="10.762622,106.660172"
              readOnly
              className="border px-2 py-1 rounded w-full max-w-xs"
            />
            <a
              href={`https://www.google.com/maps?q=10.762622,106.660172`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7-7.5 10.5-7.5 10.5S4.5 17.5 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </a>
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
              <label htmlFor="pressureAngleRef" className="font-medium">
                Pressure &amp; Angle Reference
              </label>
              <input
                id="pressureAngleRef"
                type="text"
                defaultValue="0.00bar ~ 0°"
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
              <label htmlFor="limitAngle" className="font-medium">
                Limit Angle
              </label>
              <input
                id="limitAngle"
                type="text"
                defaultValue="0°"
                className="text-gray-500 bg-transparent outline-none"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
