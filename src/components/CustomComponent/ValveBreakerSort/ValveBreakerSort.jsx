import React, { useState } from "react";
import {
  getSortDeviceFromStorage,
  setSortDeviceToStorage,
} from "../../../services/localStorage";
import { SlidersHorizontal } from "lucide-react"; // hoặc dùng icon khác tùy bạn

export default function ValveBreakerSort({ handleSort, dataList }) {
  const [sort, setSort] = useState(getSortDeviceFromStorage());
  const [editMode, setEditMode] = useState(false);

  const handleChange = (name, e) => {
    if (e.target.checked) {
      setSort((prev) => [...prev, name]);
    } else {
      setSort((prev) => prev.filter((item) => item !== name));
    }
  };

  const handleSave = () => {
    setSortDeviceToStorage(sort);
    handleSort(sort);
    setEditMode(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4">
      {/* Tiêu đề tổng */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">Danh sách thiết bị</h1>
        {/* Nút chỉnh sửa ngoài cùng bên phải */}
        {!editMode && (
          <button
            onClick={() => setEditMode(true)}
            className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 border border-blue-500 rounded hover:bg-blue-50 transition"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Thiết lập thứ tự thiết bị
          </button>
        )}
      </div>

      {/* Khối xổ xuống */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          editMode
            ? "max-h-[999px] opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-100"
        }`}
      >
        <div className="border rounded-lg shadow bg-white">
          {/* Header của khối */}
          <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-100">
            <h2 className="font-bold text-gray-800">
              Sắp xếp thứ tự hiển thị thiết bị
            </h2>
            <button
              onClick={() => setEditMode(false)}
              className="text-red-600 hover:underline text-sm"
            >
              Đóng
            </button>
          </div>

          {/* Bảng tiêu đề */}
          <div className="font-bold grid grid-cols-3 items-center px-4 py-2 border-b text-sm text-gray-700">
            <div className="text-center">STT</div>
            <div className="">Tên thiết bị</div>
            <div className="text-center">Chọn</div>
          </div>

          {/* Danh sách có thanh cuộn */}
          <div className="max-h-64 overflow-y-auto">
            {dataList.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-3 items-center px-4 py-2 hover:bg-gray-50 text-sm"
              >
                <div className="text-center text-gray-700">
                  {sort.includes(item.name) ? sort.indexOf(item.name) + 1 : "-"}
                </div>
                <div className="text-gray-800">{item.name}</div>
                <div className="text-center">
                  <input
                    onChange={(e) => handleChange(item.name, e)}
                    type="checkbox"
                    checked={sort.includes(item.name)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Nút lưu */}
          <div className="flex justify-center mt-4 mb-4">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
