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
<<<<<<< HEAD
import Onboardingview from "../adminlogin/onboarding/Onboardingview";
import Onboardlanding from "../adminlogin/onboarding/Onboardlanding";

=======
import Documents_ID from "../Pages/Documents_ID";
import Nominee_Bankdetails from "../Pages/Nominee_Bankdetails";
import JoiningDoc from "../Pages/JoiningDoc";
import Onboardingview from "../adminlogin/onboarding/Onboardingview";
import Onboardinginformation from "../adminlogin/onboarding/Oboardinginformation";
import Pesonalinformation from "../Pages/Pesonalinformation";
>>>>>>> 5972d1910de51ed101db50f04342ebf9e6b68475


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
<<<<<<< HEAD
=======
       <Route path="/pesonalinformation" element={<Pesonalinformation/>}/> 
       <Route path="/Documents_id" element={<Documents_ID/>}/>
       <Route path="/Nominee_bankdetails" element={<Nominee_Bankdetails/>}/>
       <Route path="/JoiningDoc" element={<JoiningDoc/>}/>
>>>>>>> 5972d1910de51ed101db50f04342ebf9e6b68475
       <Route path="/Onboardingview" element={<Onboardingview/>}/>
       <Route path="/Onboardinglanding/*" element={<Onboardlanding/>}/>
       


    </Routes>
  );
}

export default DashboardRoutes;
