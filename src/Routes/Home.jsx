import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HeroImg from "../assets/12.jpg";
import Footer from "../Components/Footer";
import Destination from "../Components/Destination";
import Trips from "../Components/Trips";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        img={HeroImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnText="Travel plan"
        btn="btn-show"
      />
      <Destination />
      <Trips />
      <Footer />
    </div>
  );
};

export default Home;
