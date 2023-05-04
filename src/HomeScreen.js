import React from "react";
import Skills from "./Skills";
import Projects from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";

function HomeScreen() {
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomeScreen;
