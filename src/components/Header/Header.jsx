import { ChevronRight } from "lucide-react";
import React from "react";
import { useLocation } from "react-router";
export default function Header() {
  const location = useLocation();
  console.log(location.pathname);
  // const params =
  //   location.pathname.split("/").at(2) || location.pathname.split("/").at(1);

  const paramsMeanings = {
    devices: "Thiết bị",
    reports: "Thống kê",
    pressureControl: "Thiết bị điều khiển áp lực",
    dataLogger: "DataLogger",
    waterQuality: "Tủ chất lượng nước",
    valveBreaker: "Đóng ngắt van bước tự động",
    edit: "Sửa",
    info: "Thông tin",
  };

  // map tao ra mang moi
  const parts = location.pathname.split("/").filter(Boolean);
  const paramText = parts
    .map((item) => paramsMeanings[item] || item)
    .join(" > ");

  console.log(paramText);

  // console.log("params", params);
  return (
    <div>
      <span className="font-bold">{paramText}</span>
    </div>
  );
}
// Lấy thông tin đường dẫn hiện tại
// a. useLocation()
// Lấy toàn bộ object URL (pathname, search, hash, state):

// const location = useLocation()
// // location.pathname === '/about'
// // location.search === '?tab=active'
// // location.hash === '#section1'
// ✅ 3. Lấy tham số từ URL
// a. useParams()
// Khi bạn định nghĩa route kiểu /user/:id, thì dùng:

// jsx
// Copy
// Edit
// import { useParams } from 'react-router-dom'

// const { id } = useParams() // nếu URL là /user/123 thì id === "123"
