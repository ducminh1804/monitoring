import React from 'react'
import ActiveBtn from "../../../../commons/ActiveBtn"
export default function ValveBreakerEdit() {
  console.log("render lai")
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
      {/* thiet lap dieu khien xuxng */}
      <div>
        <div className="bg-gray-400 flex items-center justify-between">
          <h3 className=" font-bold p-1">Thiết lập đồng hồ xung</h3>
          <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">Use setting</span>
            <span
              className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-hidden="true"
            />
          </button>
        </div>

        <li className="py-4">
          <div className="grid grid-cols-3 gap-4">
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
              <div className="">
                <span className="font-medium">Pluses per unit volume</span>
              </div>
            </div>
            <div className="">
              <input type="text" placeholder="" defaultValue={10} />
            </div>
            <span>
              p/m<sup>3</sup>
            </span>
          </div>
        </li>

        <li className="py-4">
          <div className="grid grid-cols-3 gap-4">
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
              <div>
                <span className="font-medium">Flow Rate</span>
              </div>
            </div>
            <div>
              <input type="text" placeholder="" defaultValue={10} />
            </div>
            <span>
              m<sup>3</sup>/h
            </span>{" "}
          </div>
        </li>

        <li className="py-4">
          <div className="grid grid-cols-3 gap-4">
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
              <div>
                <span className="font-medium">Net Flow Total</span>
              </div>
            </div>
            <input type="text" placeholder="" defaultValue={10} />
            <span>
              m<sup>3</sup>
            </span>
          </div>
        </li>

        <li className="py-4">
          <div className="grid grid-cols-3 gap-4">
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
              <div>
                <span className="font-medium">Forward Flow</span>
              </div>
            </div>
            <input type="text" placeholder="" defaultValue={10} />
            <span>
              m<sup>3</sup>
            </span>
          </div>
        </li>

        <li className="py-4">
          <div className="grid grid-cols-3 gap-4">
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
              <div>
                <span className="font-medium">Reserve Flow</span>
              </div>
            </div>
            <input type="text" placeholder="" defaultValue={10} />
            <span>m3</span>
          </div>
        </li>
        {/* ==================================== góc quay  */}
        <h3 className="bg-gray-400 font-bold p-1">
          Hẹn giờ đóng mở van Mode 1
        </h3>

        <li className="py-4">
          <div className="flex items-center justify-between">
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
              <div>
                <span className="font-medium">Cài đặt 1</span>
                <p className="text-gray-500">
                  Khung giờ: 0 giờ 15 phút | Ngày 01-05-2024 Mở
                </p>
              </div>
            </div>
            <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Use setting</span>
              <span
                className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center justify-between">
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
              <div>
                <span className="font-medium">Cài đặt 2</span>
                <p className="text-gray-500">
                  Khung giờ: 1 giờ 15 phút | Ngày 01-05-2024 Đóng
                </p>
              </div>
            </div>
            <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Use setting</span>
              <span
                className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center justify-between">
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
              <div>
                <span className="font-medium">Cài đặt 3</span>
                <p className="text-gray-500">
                  Khung giờ: 2 giờ 15 phút | Ngày 01-05-2024 Mở
                </p>
              </div>
            </div>
            <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Use setting</span>
              <span
                className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center justify-between">
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
              <div>
                <span className="font-medium">Cài đặt 4</span>
                <p className="text-gray-500">
                  Khung giờ: 3 giờ 15 phút | Ngày 01-05-2024 Đóng
                </p>
              </div>
            </div>
            <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Use setting</span>
              <span
                className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center justify-between">
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
              <div>
                <span className="font-medium">Cài đặt 5</span>
                <p className="text-gray-500">
                  Khung giờ: 3 giờ 15 phút | Ngày 01-05-2024 Đóng
                </p>
              </div>
            </div>
            <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Use setting</span>
              <span
                className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </li>

        {/* mode 2 */}
        {/* ==================================== góc quay  */}
        <div className="bg-gray-400 font-bold p-1 flex justify-between">
          <h3 className="">Hẹn giờ đóng mở van Mode 2</h3>
          <ActiveBtn />
        </div>

        <li className="py-4">
          <div className="flex items-center justify-between">
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
              <div>
                <span className="font-medium">Cài đặt 1</span>
                <p className="text-gray-500">
                  Khung giờ: 6 giờ 30 phút | Ngày 02-05-2024 Mở
                </p>
              </div>
            </div>
            <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Use setting</span>
              <span
                className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center justify-between">
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
              <div>
                <span className="font-medium">Cài đặt 2</span>
                <p className="text-gray-500">
                  Khung giờ: 7 giờ 30 phút | Ngày 02-05-2024 Đóng
                </p>
              </div>
            </div>
            <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Use setting</span>
              <span
                className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center justify-between">
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
              <div>
                <span className="font-medium">Cài đặt 3</span>
                <p className="text-gray-500">
                  Khung giờ: 8 giờ 30 phút | Ngày 02-05-2024 Mở
                </p>
              </div>
            </div>
            <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Use setting</span>
              <span
                className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center justify-between">
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
              <div>
                <span className="font-medium">Cài đặt 4</span>
                <p className="text-gray-500">
                  Khung giờ: 9 giờ 30 phút | Ngày 02-05-2024 Đóng
                </p>
              </div>
            </div>
            <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Use setting</span>
              <span
                className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </li>
        <li className="py-4">
          <div className="flex items-center justify-between">
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
              <div>
                <span className="font-medium">Cài đặt 5</span>
                <p className="text-gray-500">
                  Khung giờ: 10 giờ 30 phút | Ngày 02-05-2024 Mở
                </p>
              </div>
            </div>
            <button className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Use setting</span>
              <span
                className="relative inline-block h-5 w-5 rounded-full bg-gray-200 transition ease-in-out duration-200 transform translate-x-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-hidden="true"
              />
            </button>
          </div>
        </li>
      </div>
    </ul>
  </div>
);
}