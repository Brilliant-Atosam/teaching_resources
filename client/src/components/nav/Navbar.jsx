import React from "react";
import { FaBars, FaShoppingBag } from "react-icons/fa";
import "../../styles/navbar.css";
import { CiBrightnessUp } from "react-icons/ci";
import { Link } from "react-router-dom";
import useCommonFuntions from "../../util/commonFunctions";
const Navbar = () => {
  const { handleToggleMenu } = useCommonFuntions();
  return (
    <nav>
      <div className="nav-left">
        <FaBars size={40} className="menu-icon" onClick={handleToggleMenu} />
        <Link className="nav-left go-home" to="/">
          <CiBrightnessUp className="logo-icon" />
          <h1 className="logo">Brilliant SC</h1>
        </Link>
      </div>
      <div className="nav-right">
        <ul className="nav-items">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/library" className="nav-item">
            Library
          </Link>
          <Link to="/lessons" className="nav-item">
            lessons
          </Link>
          <div className="cart-btn">
            <FaShoppingBag className="cart-icon" />
            <span className="cart-item-count">0</span>
          </div>
        </ul>
        <div className="search-mb">
          <div className="cart-btn">
            <FaShoppingBag className="cart-icon" />
            <span className="cart-item-count">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
