import React from "react";
import { BsXLg } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaInstagram,
  FaRegEnvelope,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { menuItems } from "../util/options";
import commonFuntions from "../util/commonFunctions";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { handleToggleMenu } = commonFuntions();
  const { toggleMenu } = useSelector((state) => state.globalStates);
  return (
    <div className={toggleMenu ? "sidebar show-menu" : "sidebar"}>
      <div className="sidebar-top">
        <BsXLg className="close-menu" onClick={handleToggleMenu} />
        <h1 className="sidebar-heading">Menu</h1>
      </div>
      <div className="sidebar-middle">
        {menuItems.map((item, i) => (
          <Link to={item.url} className="sidebar-item" onClick={handleToggleMenu} key={i}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="social">
        <FaWhatsappSquare className="footer-icon" />
        <FaFacebookSquare className="footer-icon" />
        <FaTwitterSquare className="footer-icon" />
        <FaInstagram className="footer-icon" />
        <FaRegEnvelope className="footer-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
