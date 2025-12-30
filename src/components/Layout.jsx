import React from "react";
import Sidebar from "./children_of_dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="container mx-auto">
      <div className="flex gap-5">
        <Sidebar />
        <div className="flex flex-1 flex-col gap-5">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
