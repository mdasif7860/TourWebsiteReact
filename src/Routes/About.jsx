import React from "react";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/night.jpg";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import AboutComp from "../Components/AboutComp";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        img={AboutImg}
        title="About"
        btn = "btn-hide"
      />
      <AboutComp />
      <Footer />
    </div>
  );
};

export default About;
