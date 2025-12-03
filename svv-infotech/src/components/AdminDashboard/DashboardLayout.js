import React from "react";
import Sidebar from "./Sidebar";
import DashboardRoutes from "./DashboardRoutes";
import AdminNavbar from "./AdminNavbar";
import "../../Styles/DashboardLayout.css";


function DashboardLayout() {
  return (
    <div className="admin-layout">
      <AdminNavbar/>
      <Sidebar />
      <main className="admin-main-content">
        <DashboardRoutes/>
      </main>
    </div>
  );
}

export default DashboardLayout;
