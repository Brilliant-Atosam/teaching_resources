import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaRegEnvelope,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { BsGeoAlt, BsTelephoneInbound } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="container footer">
      <div className="card">
        <h1 className="footer-heading">Services</h1>
        <li className="card-list-item">Service 1</li>
        <li className="card-list-item">Service 1</li>
        <li className="card-list-item">Service 1</li>
        <li className="card-list-item">Service 1</li>
      </div>
      <div className="card">
        <h1 className="footer-heading">Contact</h1>
        <div className="social">
          <FaWhatsappSquare className="footer-icon" />
          <FaFacebookSquare className="footer-icon" />
          <FaTwitterSquare className="footer-icon" />
          <FaInstagram className="footer-icon" />
          <FaRegEnvelope className="footer-icon" />
        </div>
        <div className="contact-info">
          <p>
            <BsTelephoneInbound className="footer-icon" /> 0544006865
          </p>
          <p>
            <BsGeoAlt className="footer-icon" /> GCIHS, Adansi-Asokwa
          </p>
        </div>
      </div>
      <div className="card">
        <h1 className="footer-heading">Important sites</h1>
      </div>
    </div>
  );
};

export default Footer;
