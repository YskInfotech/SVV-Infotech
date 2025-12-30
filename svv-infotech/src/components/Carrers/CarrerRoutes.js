import React from "react";
import { Routes, Route } from "react-router-dom";
import CarrerHome from "./CarrerHome";
import Carrerapplicationform from "./Carrerapplicationform";
import Navbar from "../Navbar";
import CarrerApply from "./Carrerapply";

function CarrerRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="carrerhome" element={<CarrerHome />} />
        <Route path="carrerapply/:id" element={<CarrerApply />} />
        <Route path="carrerapplicationform/:id" element={<Carrerapplicationform />} />
      </Routes>
    </>
  );
}

export default CarrerRoutes;
