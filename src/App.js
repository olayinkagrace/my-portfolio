import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Projects from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import TheNavbar from "./Component.js/TheNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import HomeScreen from "./HomeScreen";

function App(params) {
  return (
    <main>
      <TheNavbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/aboutme' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
     
    </main>
  );
}
export default App;
