import React from "react";
import {Route, Routes } from "react-router-dom";

import Pesonalinformation from "../../Pages/Pesonalinformation";
import DocumentsID from "../../Pages/DocumentsID";
import NomineeBankdetails from "../../Pages/NomineeBankdetails";
import JoiningDoc from "../../Pages/JoiningDoc";

function Onboardpersonview(){
    return(
        <>
         <Routes>   
        <Route path="/" element={<Pesonalinformation/>}/> 
       <Route path="/Documentsid" element={<DocumentsID/>}/>
       <Route path="/Nomineebankdetails" element={<NomineeBankdetails/>}/>
       <Route path="/JoiningDoc" element={<JoiningDoc/>}/>
        </Routes>
        </>
    )
}
export default Onboardpersonview;