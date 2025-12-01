
import React from "react";
import { Routes, Route } from "react-router-dom";
import CarrerHome from "./CarrerHome";


function CarrerRoutes() {
  return (
    
    <Routes>
          <Route path="/carrerhome" element={<CarrerHome/>} />
             

    </Routes>
  );
}

export default CarrerRoutes;
