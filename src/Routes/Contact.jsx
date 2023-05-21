import React from "react";
import Navbar from "../Components/Navbar";
import ContactImg from "../assets/2.jpg";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        img={ContactImg}
        title="Contact"
        btn = "btn-hide"
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
