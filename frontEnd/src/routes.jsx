import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./view/home";
import { RedirectToWhatsapp } from "./webLinks/redirectToWhatsapp";

const RoutesCustom = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<h1>Nosytros</h1>} />
      <Route path="/whatsapp" element={<RedirectToWhatsapp />} />
      {/* Otras rutas aquí */}
    </Routes>
  );
};

export default RoutesCustom;
