import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../Pages/DashboardHome";
import AddonJobs from "../Currentjobs/AddonJobs";
import Quickadmin from "../Pages/Quickadmin";
import Shortlistcandidates from "../Pages/Shortlistcandidates";
import Rejectcandidates from "../Pages/Rejectcandidates";
import Pendingcandidates from "../Pages/Pendingcandidates";
import Candidateview from "../Pages/Candidateview";
import Onboardingview from "../adminlogin/onboarding/Onboardingview";
import Onboardlanding from "../adminlogin/onboarding/Onboardlanding";
import AdminJobsList from "../Pages/AdminJobsList";
import AdminCandidatesList from "../Pages/AdminCandidateList";
import CandidateProfile from "../Pages/CandidateProfile";



function DashboardRoutes() {
  return (
    <Routes>
       <Route path="/" element={<DashboardHome />} />
       <Route path="AddonJobs" element={<AddonJobs/>} />
       <Route path="Jobedit/:id" element={<AddonJobs/>} />
       <Route path="/Quickadmin" element={<Quickadmin/>}/>
       <Route path="/Shortlistcandidates" element={<Shortlistcandidates/>}/>
       <Route path="/Rejectcandidates" element={<Rejectcandidates/>}/>
       <Route path="/Pendingcandidates" element={<Pendingcandidates/>}/>
       <Route path="/Candidateview" element={<Candidateview/>}/> 
       <Route path="/Onboardingview" element={<Onboardingview/>}/>
       <Route path="/Onboardinglanding/:jobId" element={<Onboardlanding/>}/>
       <Route path="/AdminJobsList" element={<AdminJobsList/>}/>
       <Route path="/AdminCandidateList/:jobId" element={<AdminCandidatesList/>}/>
       <Route path="/CandidateProfile/:jobId" element={<CandidateProfile/>}/>
       


    </Routes>
  );
}

export default DashboardRoutes;
