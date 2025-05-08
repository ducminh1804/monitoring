import React from "react";
import { useRoutes } from "react-router";
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
import File from "./components/File/File";
export default function useRouteElement() {
  const route = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <ContentLayout />,
          children: [
            {
              path: "/main/reports",
              element: <File />,
            },
            {
              path: "/main/devices",
              element: <DevicePage />,
            },
            {
              path: "/main/devices/:deviceType",
              // element: <DeviceList />,
              element: <Test />,
            },
            {
              path: "/main/devices/pressureControl",
              element: <PressureControl />,
            },
            {
              path: "/main/devices/pressureControl/:id",
              element: <PressureControlDetail />,
            },
            {
              path: "/main/devices/pressureControl/:id/edit",
              element: <PressureControlEdit />,
            },
            {
              path: "/main/devices/valveBreaker",
              element: <ValveBreaker />,
            },
            {
              path: "/main/devices/dataLogger",
              element: <DataLogger />,
            },
            {
              path: "/main/devices/dataLogger/:id",
              element: <DataLoggerDetail />,
            },
            {
              path: "/main/devices/dataLogger/:id/edit",
              element: <DataLoggerEdit />,
            },
            {
              path: "/main/devices/valveBreaker/edit",
              element: <ValveBreakerEdit />,
            },
            {
              path: "/main/devices/waterQuality",
              element: <WaterQuality />,
            },
            {
              path: "/main/devices/waterQuality/:id",
              element: <WaterQualityDetail />,
            },
            {
              path: "/main/devices/waterQuality/:id/info",
              element: <WaterQualityInfo />,
            },
            {
              path: "/main/devices/waterQuality/:id/edit",
              element: <WaterQualityEdit />,
            },
          ],
        },
      ],
    },
    {
      path: "/auth/login",
      element: <Login />,
    },
    {
      path: "/file",
      element: <File />,
    },
  ]);

  return route;
}
// {
//               path: "/main/devices/pressureControl",
//               element: <PressureControl />,
//             },
//             {
//               path: "/main/devices/dataLogger",
//               element: <DataLogger />,
//             },
