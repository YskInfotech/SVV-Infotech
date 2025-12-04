import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../Pages/DashboardHome";
import Onboarding from "../Pages/Onboarding";
import AddonJob from "../Currentjobs/AddonJob";
import AddonJobs from "../Currentjobs/AddonJobs";
import Viewjobs from "../Currentjobs/Viewjobs";






function DashboardRoutes() {
  return (
    <Routes>
       <Route path="/" element={<DashboardHome />} />
       <Route path="AddonJob" element={<AddonJob/>} />
       <Route path="AddonJobs" element={<AddonJobs/>} />
       <Route path="Viewjobs" element={<Viewjobs/>} />
       <Route path="onboarding" element={<Onboarding/>}></Route>
    </Routes>
  );
}

export default DashboardRoutes;
