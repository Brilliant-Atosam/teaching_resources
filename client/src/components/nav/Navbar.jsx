import React from "react";
import { FiSearch } from "react-icons/fi";
import { TbMenu2 } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
import "../../styles/navbar.css";
import { CiBrightnessUp } from "react-icons/ci";
import { Link } from "react-router-dom";
import useCommonFuntions from "../../util/commonFunctions";
const Navbar = () => {
  const { handleToggleMenu } = useCommonFuntions();
  return (
    <nav>
      <div className="nav-left">
        <TbMenu2 size={40} className="menu-icon" onClick={handleToggleMenu} />
        <Link className="nav-left go-home" to="/">
          <CiBrightnessUp className="logo-icon" />
          <h1 className="logo">company</h1>
        </Link>
      </div>
      <div className="nav-right">
        <div className="search-form">
          <input type="text" placeholder="Search" className="search-input" />
          <FiSearch color="black" />
        </div>
        <ul className="nav-items">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/register" className="nav-item">
            Register
          </Link>
          <Link to="/login" className="nav-item">
            Login
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </ul>
        <div className="search-mb">
          <BiSearch size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
