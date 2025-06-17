import { Navigate, Outlet, useRoutes } from "react-router";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout/MainLayout";
import ContentLayout from "./layouts/ContentLayout";
import DevicePage from "./pages/DevicePage";
import Test from "./components/Test/Test";
import ValveBreaker from "./components/DeviceList/ValveBreakerList/ValveBreaker";
import ValveBreakerEdit from "./components/DeviceList/ValveBreakerList/ValveBreakerEdit/ValveBreakerEdit";
import WaterQualityEdit from "./components/DeviceList/WaterQualityList/WaterQualityEdit";
import DataLoggerEdit from "./components/DeviceList/DataLoggerList/DataLoggerEdit/DataLoggerEdit";
import DataLoggerDetail from "./components/DeviceList/DataLoggerList/DataLoggerDetail/DataLoggerDetail";
import WaterQualityDetail from "./components/DeviceList/WaterQualityList/WaterQualityDetail/WaterQualityDetail";
import WaterQualityInfo from "./components/DeviceList/WaterQualityList/WaterQualityInfo/WaterQualityInfo";
import PressureControlDetail from "./components/DeviceList/PressureControlList/PressureControlDetail";
import PressureControlEdit from "./components/DeviceList/PressureControlList/PressureControlEdit";
import Dashboard from "./components/Dashboard/Dashboard";
import { useSelector } from "react-redux";
import PressureControlList from "./components/DeviceList/PressureControlList/PressureControlList";
import DataLoggerList from "./components/DeviceList/DataLoggerList";
import WaterQualityList from "./components/DeviceList/WaterQualityList/WaterQualityList";
import ValveBreakerList from "./components/DeviceList/ValveBreakerList";
import ValveBreakerDetail from "./components/DeviceList/ValveBreakerList/ValveBreakerDetail/ValveBreakerDetail";
export default function useRouteElement() {
  // "" dung trong children.
  // / duong dan tuyet doi, k ghep voi path cha

  // const isAuthenticated = useSelector(state=> state.auth.isAuthenticated);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const isAuthenticated = false;

  // ProtectedRoute dùng để bảo vệ các route chỉ dành cho người đã đăng nhập.
  // Nếu người dùng chưa đăng nhập, nó sẽ chuyển hướng về trang /login.
  function ProtectedRoute() {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  }

  // Nếu người dùng đã đăng nhập, nó sẽ chuyển hướng về trang chính .
  function RejectedRoute() {
    return !isAuthenticated ? <Outlet /> : <Navigate to="reports" />;
  }

  const route = useRoutes([
    {
      path: "",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <ContentLayout />,
              children: [
                {
                  index: true,
                  element: <Navigate to="reports" />,
                },
                {
                  path: "reports",
                  element: <Dashboard />,
                  // element: <File />,
                },
                {
                  path: "devices",
                  children: [
                    {
                      path: "",
                      element: <DevicePage />,
                    },
                    {
                      path: ":deviceType",
                      element: <Test />,
                    },
                    {
                      path: "pressureControl",
                      children: [
                        {
                          path: "",
                          element: <PressureControlList />,
                        },
                        {
                          path: ":id",
                          element: <PressureControlDetail />,
                        },
                        {
                          path: ":id/edit",
                          element: <PressureControlEdit />,
                        },
                      ],
                    },
                    {
                      path: "valveBreaker",
                      children: [
                        {
                          path: "",
                          element: <ValveBreakerList />,
                        },
                        {
                          path: ":id",
                          element: <ValveBreakerDetail />,
                        },
                        {
                          path: ":id/edit",
                          element: <ValveBreakerEdit />,
                        },
                      ],
                    },
                    {
                      path: "dataLogger",
                      children: [
                        {
                          path: "",
                          element: <DataLoggerList />,
                        },
                        {
                          path: ":id",
                          element: <DataLoggerDetail />,
                        },
                        {
                          path: ":id/edit",
                          element: <DataLoggerEdit />,
                        },
                      ],
                    },
                    {
                      path: "waterQuality",
                      children: [
                        {
                          path: "",
                          element: <WaterQualityList />,
                        },
                        {
                          path: ":id",
                          element: <WaterQualityDetail />,
                        },
                        {
                          path: ":id/info",
                          element: <WaterQualityInfo />,
                        },
                        {
                          path: ":id/edit",
                          element: <WaterQualityEdit />,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "",
      element: <RejectedRoute />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return route;
}
