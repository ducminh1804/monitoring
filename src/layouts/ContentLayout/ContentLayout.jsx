import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router";

export default function ContentLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* full chiều cao màn hình */}
      <div className="border-b p-2">
        <Header />
      </div>
      <div className=" flex-1 overflow-auto">
        {/* phần Outlet có scroll */}
        <Outlet />
        {/* <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div>
        <div>fsdfsf</div> */}
      </div>
    </div>
  );
}
