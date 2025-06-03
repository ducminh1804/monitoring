import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router";

export default function ContentLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* full chiều cao màn hình */}
      <div className="border-b p-2 mb-1">
        <Header />
      </div>
      <div className=" flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
