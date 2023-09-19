import React from "react";
import { HiBars3 } from "react-icons/hi2";
import "../../styles/navbar.css";
import { CiBrightnessUp } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <CiBrightnessUp className="logo" />
        <h1 className="logo-text">Brilliant SC</h1>
      </div>
      <div className="nav-right">
        <label htmlFor="menu-toggler">
          <HiBars3 className="menu-icon" />
        </label>
        <input type="checkbox" name="" id="menu-toggler" />
        <div className="side-menu">
          <a href="" className="nav-link">
            Lorem, ipsum.
          </a>
          <a href="" className="nav-link">
            Lorem, ipsum.
          </a>
          <a href="" className="nav-link">
            Lorem, ipsum.
          </a>
          <a href="" className="nav-link">
            Lorem, ipsum.
          </a>
          <a href="" className="nav-link">
            Lorem, ipsum.
          </a>
          <a href="" className="nav-link">
            Lorem, ipsum.
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
