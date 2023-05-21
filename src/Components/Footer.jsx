import React from "react";
import "./Footer.css";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-up">
        <div className="left">
          <h2>Trippy</h2>
          <p>Choose Your favourite destination</p>
        </div>
        <div className="right footer-icons">
          <BsFacebook className="f-icons" style={{marginRight: ".6rem", fontSize: "1.3rem", cursor: "pointer", transition: ".3s all ease-in-out"}}/>
          <BsTwitter className="f-icons" style={{marginRight: ".6rem", fontSize: "1.3rem", cursor: "pointer", transition: ".3s all ease-in-out"}}/>
          <BsInstagram className="f-icons" style={{marginRight: ".6rem", fontSize: "1.3rem", cursor: "pointer", transition: ".3s all ease-in-out"}}/>
          <BsGithub className="f-icons" style={{marginRight: ".6rem", fontSize: "1.3rem", cursor: "pointer", transition: ".3s all ease-in-out"}}/>
        </div>
      </div>
      <div className="footer-down">
        <ul>
            <h3>Project</h3>
             <li><a href="#">Changelog</a></li>
             <li><a href="#">Status</a></li>
             <li><a href="#">License</a></li>
             <li><a href="#">All Versions</a></li>
        </ul>
        <ul>
            <h3>Community</h3>
             <li><a href="#">GitHub</a></li>
             <li><a href="#">Issues</a></li>
             <li><a href="#">Project</a></li>
             <li><a href="#">Twitter</a></li>
        </ul>
        <ul>
            <h3>Help</h3>
             <li><a href="#">Support</a></li>
             <li><a href="#">Troubleshooting</a></li>
             <li><a href="#">Contact Us</a></li>
        </ul>
        <ul>
            <h3>Others</h3>
             <li><a href="#">Terms of Service</a></li>
             <li><a href="#">Privacy Policy</a></li>
             <li><a href="#">License</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
