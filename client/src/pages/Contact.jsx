import "../styles/contact.css";
import "../styles/login.css";
import "../styles/intro.css";
import React from "react";
import { MdOutlineLocationOn, MdPhoneCallback } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="container contact">
      <div className="contact-card">
        <div className="contact-left">
          <h1 className="contact-heading">Contact us</h1>
          <div className="contact-info">
            <div className="contact-info-title">
              <MdPhoneCallback className="contact-info-icon" />
              <h1 className="contact-info-heading">Call us</h1>
            </div>
            <p className="contact-info-value">0544006865, 0553385436</p>
          </div>
          <div className="contact-info">
            <div className="contact-info-title">
              <MdOutlineLocationOn className="contact-info-icon" />
              <h1 className="contact-info-heading">Location</h1>
            </div>
            <p className="contact-info-value">
              GCIHS-PAC, Adansi-Asokwa, Hwiremoase
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-info-title">
              <BsClock className="contact-info-icon" />
              <h1 className="contact-info-heading">Business hours</h1>
            </div>
            <p className="contact-info-value">
              24/7, Monday-Saturday, Sun ....… Closed
            </p>
          </div>
        </div>
        <div className="contact-right">
          <div className="input-container">
            <FaRegUser className="input-icon" />
            <input type="text" placeholder="username" className="input" />
          </div>
          <div className="input-container">
            <HiOutlineMail className="input-icon" />
            <input type="text" placeholder="email" className="input" />
          </div>
          <textarea cols="30" rows="10" className="text-area"></textarea>
          <button className="btn contact-btn">Send message</button>
        </div>
      </div>
    </div>
  );
}
