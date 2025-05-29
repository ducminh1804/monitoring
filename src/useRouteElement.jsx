import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Report from "./components/Report";
import ContentLayout from "./layouts/ContentLayout";
import DevicePage from "./pages/DevicePage";
import DeviceList from "./components/DeviceList";
import Test from "./components/Test/Test";
import ValveBreaker from "./components/DeviceList/ValveBreaker/ValveBreaker";
import ValveBreakerEdit from "./components/DeviceList/ValveBreaker/ValveBreakerEdit/ValveBreakerEdit";
import WaterQuality from "./components/DeviceList/WaterQuality/WaterQuality";
import WaterQualityEdit from "./components/DeviceList/WaterQuality/WaterQualityEdit";
import DataLogger from "./components/DeviceList/DataLogger/DataLogger";
import DataLoggerEdit from "./components/DeviceList/DataLogger/DataLoggerEdit/DataLoggerEdit";
import DataLoggerDetail from "./components/DeviceList/DataLogger/DataLoggerDetail/DataLoggerDetail";
import WaterQualityDetail from "./components/DeviceList/WaterQuality/WaterQualityDetail/WaterQualityDetail";
import WaterQualityInfo from "./components/DeviceList/WaterQuality/WaterQualityInfo/WaterQualityInfo";
import PressureControl from "./components/DeviceList/PressureControl/PressureControl";
import PressureControlDetail from "./components/DeviceList/PressureControl/PressureControlDetail";
import PressureControlEdit from "./components/DeviceList/PressureControl/PressureControlEdit";
import LearnChart from "./components/LearnChart/LearnChart";
import Dashboard from "./components/Dashboard/Dashboard";
import { useSelector } from "react-redux";
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
    return !isAuthenticated ? <Outlet /> : <Navigate to="/main/reports" />;
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
                  path: "/file",
                  element: <LearnChart />,
                },
                {
                  path: "/main/reports",
                  element: <Dashboard />,
                  // element: <File />,
                },
                {
                  path: "main/devices",
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
                          element: <PressureControl />,
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
                          element: <ValveBreaker />,
                        },
                        {
                          path: "edit",
                          element: <ValveBreakerEdit />,
                        },
                      ],
                    },
                    {
                      path: "dataLogger",
                      children: [
                        {
                          path: "",
                          element: <DataLogger />,
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
                          element: <WaterQuality />,
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
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
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
    // {
    //   path: "/file",
    //   element: <LearnChart />,
    // },
  ]);

  return route;
}
