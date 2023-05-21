import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  BsHouseFill,
  BsInfoCircleFill,
  BsGearWideConnected,
  BsPersonSquare,
  BsXLg,
  BsTextCenter,
} from "react-icons/bs";

const Navbar = () => {
  const [click, setClickBtn] = useState(false);
  const clickHandler = () => setClickBtn(!click);
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menuIcons">
        {!click ? (
          <BsTextCenter onClick={clickHandler} />
        ) : (
          <BsXLg onClick={clickHandler} />
        )}
      </div>
      <ul className={!click ? "nav-menu" : "nav-menu active"}>
        <li>
          <Link to={"/"} className="nav-links">
            <BsHouseFill className="nav-icons" />
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="nav-links">
            <BsInfoCircleFill className="nav-icons" />
            About
          </Link>
        </li>
        <li>
          <Link to={"/service"} className="nav-links">
            <BsGearWideConnected className="nav-icons" />
            Services
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="nav-links">
            <BsPersonSquare className="nav-icons" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
