import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="hero-section">
      <img className={props.cName} src={props.img} alt="" />
      <div className="hero-content">
        <h1 className="heading">{props.title}</h1>
        <p className="para">{props.text}</p>
        <button className={props.btn}>{props.btnText}</button>
      </div>
    </div>
  );
};

export default Hero;
