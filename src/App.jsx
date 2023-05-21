import React from "react";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
