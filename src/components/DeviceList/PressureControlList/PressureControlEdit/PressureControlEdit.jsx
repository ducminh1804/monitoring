import React from "react";
import ActiveBtn from "../../../../commons/ActiveBtn";
import { LocationEdit, Link } from "lucide-react";
import EditOption from "../../../CustomComponent/EditOption/EditOption";
import { useParams } from "react-router";
export default function PressureControlEdit() {
  const handleGocQuayTheoThoiGian = (key, state) => {
    console.log("goc-quay-theo-thoi-gian:", key);
    console.log("state:", state);
  };

  const handleGocQuayTheoApSuat = (key, state) => {
    console.log("goc-quay-theo-ap-suat:", key);
    console.log("state:", state);
  };

  const {id} = useParams()
  console.log(id)
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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2 text-blue-500"
            >
              <path d="M12 2a9 9 0 0 0-9 9v7c0 1.105.895 2 2 2a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2c0-1.105.895-2 2-2v-7a9 9 0 0 0-9-9Zm7 9c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h10c1.105 0 2 .895 2 2v4Z" />
            </svg> */}
            <LocationEdit />
            <div className="flex flex-col">
              <span className="font-medium">GPS</span>
              {/* <input className="text-gray-500">WC4B4R-W-0.1</input> */}
              <div className="flex gap-1 items-center">
                <input
                  className="text-gray-500 border"
                  type="text"
                  defaultValue={11}
                />
                <Link />
              </div>
            </div>
          </div>
        </li>
        
        <EditOption
          icon="Clock"
          title="Đồng bộ RTC cho module"
          description="Thao tác đồng bộ thời gian thực RTC"
          initialState={false}
          onToggle={(newState) => console.log("RTC: ", newState)}
        />

        <EditOption
          icon="Clock"
          title="History Data"
          description="Truy xuất dữ liệu lịch sử"
          initialState={false}
          onToggle={(newState) => console.log("History: ", newState)}
        />

        <EditOption
          icon="Clock"
          title="Response Time"
          description="Thời gian phản hồi: 0s"
          initialState={false}
          onToggle={(newState) => console.log("Response Time: ", newState)}
        />

        <EditOption
          icon="Clock"
          title="Interval Read Pressure"
          description="Thời gian đọc áp suất: 0s"
          initialState={false}
          onToggle={(newState) => console.log("Read Pressure: ", newState)}
        />

        <EditOption
          icon="Clock"
          title="Interval Read Metter"
          description="Thời gian đọc đồng hồ: 0s"
          initialState={false}
          onToggle={(newState) => console.log("Read Metter: ", newState)}
        />

        <EditOption
          icon="Clock"
          title="Pressure & Angle Reference"
          description="0.00bar ~ 0°"
          initialState={false}
          onToggle={(newState) => console.log("Ref: ", newState)}
        />

        <EditOption
          icon="Clock"
          title="Limit Angle"
          description="Giới hạn góc: 0°"
          initialState={false}
          onToggle={(newState) => console.log("Limit Angle: ", newState)}
        />

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
        </div>

        <div>
          <h3 className="bg-gray-400 font-bold p-1">
            Cài đặt góc quay theo thời gian
          </h3>
          {/*  */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={`goc-quay-theo-thoi-gian-${index}`}>
              <EditOption
                icon="Time"
                title={`Giai đoạn ${index + 1}`}
                description="Khung giờ: 0 giờ 0 phút | Góc quay: 0"
                initialState={false}
                onToggle={(newState) =>
                  handleGocQuayTheoThoiGian(index, newState)
                }
              />
            </div>
          ))}

          {/* cai dat goc quay theo ap suat */}
          <h3 className="bg-gray-400 font-bold p-1">
            Cài đặt góc quay theo áp suất
          </h3>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={`goc-quay-theo-ap-suat-${index}`}>
              <EditOption
                icon="Time"
                title={`Khoảng cài đặt ${index + 1}`}
                description="Khung giờ: 0 giờ 0 phút | Góc quay: 0"
                initialState={false}
                onToggle={(newState) =>
                  handleGocQuayTheoApSuat(index, newState)
                }
              />
            </div>
          ))}
          {/* cai dat dong mo van theo ap suat */}
          <h3 className="bg-gray-400 font-bold p-1">
            Cài đặt đóng/mở van theo áp suất (PV &gt; SP)
          </h3>
          <EditOption
            icon="Time"
            title="Kích hoạt"
            initialState={false} // Mặc định trạng thái là "tắt"
            onToggle={(newState) => console.log("Trạng thái mới: ", newState)}
          />
          <EditOption
            icon="Time"
            title="Cài đặt áp suất"
            description="0 bar"
            initialState={false} // Mặc định trạng thái là "tắt"
            onToggle={(newState) => console.log("Trạng thái mới: ", newState)}
          />
          {Array.from({ length: 4 }).map((_, index) => (
            <EditOption
              key={index}
              icon="Val"
              title={`Chọn trạng thái van ${index + 1}`}
              initialState={false}
              onToggle={(newState) => {
                console.log(
                  `Trạng thái mới của van khoảng ${index + 1}:`,
                  newState
                );
              }}
            />
          ))}
          {/* pv < sv */}
          {/* cai dat dong mo van theo ap suat */}
          <h3 className="bg-gray-400 font-bold p-1">
            Cài đặt đóng/mở van theo áp suất (PV &lt; SP)
          </h3>
          <EditOption
            icon="Time"
            title="Kích hoạt"
            initialState={false} // Mặc định trạng thái là "tắt"
            onToggle={(newState) => console.log("Trạng thái mới: ", newState)}
          />
          <EditOption
            icon="Time"
            title="Cài đặt áp suất"
            description="0 bar"
            initialState={false} // Mặc định trạng thái là "tắt"
            onToggle={(newState) => console.log("Trạng thái mới: ", newState)}
          />
          {Array.from({ length: 4 }).map((_, index) => (
            <EditOption
              key={index}
              icon="Val"
              title={`Chọn trạng thái van ${index + 1}`}
              initialState={false}
              onToggle={(newState) => {
                console.log(
                  `Trạng thái mới của van khoảng ${index + 1}:`,
                  newState
                );
              }}
            />
          ))}
          {/* tu dong dieu khien theo ápuat */}
          <h3 className="bg-gray-400 font-bold p-1">
            Tự động điều khiển theo áp suất
          </h3>
          <EditOption
            icon="Time"
            title="Kích hoạt"
            initialState={false} // Mặc định trạng thái là "tắt"
            onToggle={(newState) => console.log("Trạng thái mới: ", newState)}
          />
          {Array.from({ length: 5 }).map((_, index) => (
            <EditOption
              key={index}
              icon="Time"
              title={`Khoảng cài đặt ${index + 1}`}
              description="Time: 00~00 | Pressure: 0.00~0.00"
              initialState={false}
              onToggle={(newState) => {
                console.log(
                  `Trạng thái mới của khoảng ${index + 1}:`,
                  newState
                );
              }}
            />
          ))}
          {/* cai dat goc quay theo ap suat */}
          <div className="flex items-center bg-gray-400 ">
            <div className="flex items-center">
              <h3 className="font-bold p-1">
                Cài đặt góc quay theo áp suất ID tham chiếu
              </h3>
              <div className="mx-2 text-white border rounded p-2">
                <span>ID</span>
                1234
              </div>
            </div>

            <div className=" font-bold">
              <span className="mx-2">Pressure:</span> <span>0.89 bar</span>
            </div>
          </div>
          {Array.from({ length: 5 }).map((_, index) => (
            <EditOption
              key={index}
              icon="Time"
              title={`Khoảng cài đặt ${index + 1}`}
              description="Khung giờ: 0 giờ 0 phút | Góc quay: 0"
              initialState={false}
              onToggle={(newState) => {
                console.log(
                  `Trạng thái mới của khoảng ${index + 1}:`,
                  newState
                );
              }}
            />
          ))}
          {/* id tham chieu */}
          {/* cai dat dong mo van theo ap suat */}
          <div className="flex items-center bg-gray-400 ">
            <div className="flex items-center">
              <h3 className="font-bold p-1">
                Cài đặt đóng/mở van theo áp suất ID tham chiếu (PV &gt; SP)
              </h3>
              <div className="mx-2 text-white border rounded p-2">
                <span>ID</span>
                1234
              </div>
            </div>

            <div className=" font-bold">
              <span className="mx-2">Pressure:</span> <span>0.89 bar</span>
            </div>
          </div>
          <EditOption
            icon="Time"
            title="Kích hoạt"
            initialState={false} // Mặc định trạng thái là "tắt"
            onToggle={(newState) => console.log("Trạng thái mới: ", newState)}
          />
          <EditOption
            icon="Time"
            title="Cài đặt áp suất"
            description="0 bar"
            initialState={false} // Mặc định trạng thái là "tắt"
            onToggle={(newState) => console.log("Trạng thái mới: ", newState)}
          />
          {Array.from({ length: 4 }).map((_, index) => (
            <EditOption
              key={index}
              icon="Val"
              title={`Chọn trạng thái van ${index + 1}`}
              initialState={false} // Mặc định trạng thái là "tắt"
              onToggle={(newState) => console.log("Trạng thái mới: ", newState)}
            />
          ))}

          {/* 
          
           id tham chiếu pv < sp
          

          
          */}
          <div className="flex items-center bg-gray-400 ">
            <div className="flex items-center">
              <h3 className="font-bold p-1">
                Cài đặt đóng/mở van theo áp suất ID tham chiếu (PV &lt; SP)
              </h3>
              <div className="mx-2 text-white border rounded p-2">
                <span>ID</span>
                1234
              </div>
            </div>

            <div className=" font-bold">
              <span className="mx-2">Pressure:</span> <span>0.89 bar</span>
            </div>
          </div>
          <EditOption
            icon="Time"
            title="Kích hoạt"
            initialState={false} // Mặc định trạng thái là "tắt"
            onToggle={(newState) => console.log("Trạng thái mới: ", newState)}
          />
          <EditOption
            icon="Time"
            title="Cài đặt áp suất"
            description="0 bar"
            initialState={false} // Mặc định trạng thái là "tắt"
            onToggle={(newState) => console.log("Trạng thái mới: ", newState)}
          />
          {Array.from({ length: 4 }).map((_, index) => (
            <EditOption
              key={index}
              icon="Val"
              title={`Chọn trạng thái van ${index + 1}`}
              initialState={false} // Mặc định trạng thái là "tắt"
              onToggle={(newState) => console.log("Trạng thái mới: ", newState)}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}

// Forward Flow: 0 (m³)

// Reserve Flow: 0 (m³)

// User Span: 0

// Low Power Metter: False
