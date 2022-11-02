import "../styles/login.css";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login">
          <h1 className="login-heading">Welcome! Please login to continue.</h1>
          <div className="input-container">
            <HiOutlineMail className="input-icon" />
            <input type="text" placeholder="email" className="input" />
          </div>
          <div className="input-container">
            <CiLock className="input-icon" />
            <input type="password" placeholder="Password" className="input" />
          </div>
          <button className="btn login-btn">Login</button>
          <div className="login-option">
            <span>Forget password?</span>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}
