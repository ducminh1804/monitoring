import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ContentLayout from "../ContentLayout/ContentLayout";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex ">
      <div className=" flex-1/4 ">
        <Sidebar />
      </div>
      <div className=" border-l-2 flex-3/4">
        <Outlet />
      </div>
    </div>
  );
}
