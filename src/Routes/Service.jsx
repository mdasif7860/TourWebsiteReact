import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import NightImg from "../assets/night.jpg";
import Footer from "../Components/Footer";
import Trips from "../Components/Trips"

const Service = () => {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" img={NightImg} title="Service" btn="btn-hide" />
      <Trips />
      <Footer />
    </div>
  );
};

export default Service;
