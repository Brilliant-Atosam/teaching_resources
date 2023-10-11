import React from "react";
import { HiBars3 } from "react-icons/hi2";
import "../../styles/navbar.css";
import { CiBrightnessUp } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-left">
        <CiBrightnessUp className="logo" />
        <h1 className="logo-text">Brilliant SC</h1>
      </Link>
      <div className="nav-right">
        <label htmlFor="menu-toggler">
          <HiBars3 className="menu-icon" />
        </label>
        <input type="checkbox" name="" id="menu-toggler" />
        <div className="side-menu">
          <Link to="/" className="nav-link">
            Videos
          </Link>
          <Link to="/teaching_notes" className="nav-link">
            Teaching notes
          </Link>
          <Link to="/exams" className="nav-link">
            Examination & Assessment
          </Link>
          <Link to="/lesson_plan" className="nav-link">
            Lesson Plan
          </Link>
          <Link to="/detailed_notes" className="nav-link">
            Detailed notes
          </Link>
          <Link to="/scheme_of_work" className="nav-link">
            Scheme of Work
          </Link>
          <Link to="/teaching_notes" className="nav-link">
            Sign Out
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
