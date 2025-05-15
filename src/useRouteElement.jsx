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
  // "" dung trong children.
  // / duong dan tuyet doi, k ghep voi path cha
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
