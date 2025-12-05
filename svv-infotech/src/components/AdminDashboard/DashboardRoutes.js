import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "../Pages/DashboardHome";
import AddonJob from "../Currentjobs/AddonJob";
import AddonJobs from "../Currentjobs/AddonJobs";
import Viewjobs from "../Currentjobs/Viewjobs";
import Quickadmin from "../Pages/Quickadmin";
import Registercandidates from "../Pages/Rgistercandidates";
import Shortlistcandidates from "../Pages/Shortlistcandidates";
import Rejectcandidates from "../Pages/Rejectcandidates";
import Pendingcandidates from "../Pages/Pendingcandidates";
import Candidateview from "../Pages/Candidateview";
import Pesonalinformation from "../Pages/Pesonalinformation";


function DashboardRoutes() {
  return (
    <Routes>
       <Route path="/" element={<DashboardHome />} />

       <Route path="AddonJob" element={<AddonJob/>} />
       <Route path="AddonJobs" element={<AddonJobs/>} />
       <Route path="Viewjobs" element={<Viewjobs/>} />
       <Route path="/Quickadmin" element={<Quickadmin/>}/>
       <Route path="/Registercandidates" element={<Registercandidates/>}/>
       <Route path="/Shortlistcandidates" element={<Shortlistcandidates/>}/>
       <Route path="/Rejectcandidates" element={<Rejectcandidates/>}/>
       <Route path="/Pendingcandidates" element={<Pendingcandidates/>}/>
       <Route path="/Candidateview" element={<Candidateview/>}/> 
       <Route path="/pesonalinformation" element={<Pesonalinformation/>}/> 


    </Routes>
  );
}

export default DashboardRoutes;
