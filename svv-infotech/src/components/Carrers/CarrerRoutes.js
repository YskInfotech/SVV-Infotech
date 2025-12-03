
import React from "react";
import { Routes, Route } from "react-router-dom";
import CarrerHome from "./CarrerHome";
import Carrerapply from "./Carrerapply";
import Carrerapplicationform from "./Carrerapplicationform";
import Navbar from "../Navbar";


function CarrerRoutes() {
  return (
    <>
    <Navbar />
    <Routes>
          <Route path="/carrerhome" element={<CarrerHome/>} />
          <Route path="/carrerapply" element={<Carrerapply/>} />
          <Route path="/carrerapplicationform" element={<Carrerapplicationform/>} />


    </Routes>
    </>
  );
}

export default CarrerRoutes;
