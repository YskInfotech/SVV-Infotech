import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../Pages/DashboardHome";




function DashboardRoutes() {
  return (
    <Routes>
       <Route path="/" element={<DashboardHome />} />

       
    </Routes>
  );
}

export default DashboardRoutes;
