
## 🧑‍🏫 Giáo Án: React Router Declarative Mode (dùng `useRoutes()`)

---

### 🔹 1. Installation – Cài đặt React Router

🎯 **Mục tiêu:**

- Cài đặt React Router DOM v6+
- Hiểu cách tích hợp vào dự án React

📌 **Nội dung:**

- **Cài đặt:**

    ```bash
    npm install react-router-dom
    ```

    Đảm bảo `react-router-dom` >= 6.4

---

### 🔹 2. Routing – Định nghĩa tuyến (Route) bằng `useRoutes`

🎯 **Mục tiêu:**

- Sử dụng `useRoutes()` để định nghĩa route
- Hiểu cách tổ chức nested routes

📌 **Nội dung:**

#### a. Tạo route bằng object:

Để định nghĩa các routes, chúng ta sử dụng hook `useRoutes`. Hook này nhận vào một mảng các object, mỗi object đại diện cho một route.

```jsx
// routes/AppRoutes.jsx
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Stats from "../pages/Stats";

export default function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> }, // Route cho trang chủ
    { path: "/about", element: <About /> }, // Route cho trang giới thiệu
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "stats", element: <Stats /> } // Nested route cho trang thống kê
      ],
    },
  ]);

  return routes;
}


**b. Sử dụng trong App:**

```jsx
// App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
```

**🔹 3. Navigating – Điều hướng trang**

🎯 **Mục tiêu:**

*   Chuyển trang không reload
*   Sử dụng `<Link>` và `useNavigate`

📌 **Nội dung:**

**a. Dùng `<Link>`:**

```jsx
import { Link } from "react-router-dom";

<Link to="/about">Giới thiệu</Link>
```

**b. Dùng `useNavigate()`:**

```jsx
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Sau khi xử lý, chuyển trang
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Đăng nhập</button>;
};
```

**🔹 4. URL Values – Truy xuất giá trị từ URL**

🎯 **Mục tiêu:**

*   Truy xuất params và query từ URL
*   Dùng `useParams()` và `useSearchParams()`

📌 **Nội dung:**

**a. Truy xuất `:id` bằng `useParams()`:**

```jsx
// Route: /user/:id

import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
};
```

**b. Truy xuất `?key=value` bằng `useSearchParams()`:**

```jsx
// URL: /search?keyword=react

import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  return <p>Kết quả tìm kiếm: {keyword}</p>;
};
```

**✅ Tổng kết**

| Chủ đề      | Thành phần chính         | Hook hỗ trợ          |
| ----------- | ------------------------- | --------------------- |
| Routing     | `useRoutes()`            |                       |
| Navigating  | `<Link>`, `navigate()` | `useNavigate()`       |
| URL Values | `:id`, `?query=value` | `useParams()`, `useSearchParams()` |
```