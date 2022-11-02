import "../styles/login.css";
import "../styles/intro.css";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { request } from "../request";
export default function Register() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });
  const handleRegister = async () => {
    const res = await request.post("/auth/register", newUser);
    console.log(res.data);
  };
  console.log(newUser);
  return (
    <div className="login-container">
      <div className="login">
        <h1 className="login-heading">Welcome! Create account to continue.</h1>
        <div className="input-container">
          <FaRegUser className="input-icon" />
          <input
            type="text"
            placeholder="username"
            className="input"
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </div>
        <div className="input-container">
          <HiOutlineMail className="input-icon" />
          <input
            type="email"
            placeholder="Eg. atosam91@gmail.com"
            className="input"
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="input-container">
          <IoIosPhonePortrait className="input-icon" />
          <input
            type="text"
            placeholder="Eg. 0544006865"
            className="input"
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>
        <div className="input-container">
          <CiLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div className="input-container">
          <CiLock className="input-icon" />
          <input
            type="password"
            placeholder="Confirm password"
            className="input"
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, password2: e.target.value }))
            }
          />
        </div>
        <button className="btn login-btn" onClick={handleRegister}>
          Register
        </button>
        <div className="login-option">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
