import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ContentLayout from "../ContentLayout/ContentLayout";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
}
