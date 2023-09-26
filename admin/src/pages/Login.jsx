import "../styles/login.css";
import { RiAdminLine } from "react-icons/ri";
import { BsShieldLock } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiBrightnessUp } from "react-icons/ci";
import useLogin from "../custom_hooks/useLogin";
import LoginComponent from "../components/LoginComponent";
import { useState } from "react";
const Login = () => {
  // console.log(loginData);
  return (
    <div className="main-container">
      {/* <div className="login-container"> */}

      <LoginComponent />
      {/* <div className="login-form-container">
          <div className="login-greetings">
            <RiAdminLine className="login-greeting-icon" />
            <h1 className="login-heading">Welcome! Sign in to continue.</h1>
          </div>
          <div className="input-container">
            <RiAdminLine />
            <input
              type="text"
              className="login-input"
              placeholder="login ID"
              onChange={(e) => setLoginID(e.target.value)}
            />
          </div>
          <div className="input-container">
            <BsShieldLock />
            <input
              type={showPassword ? "text" : "password"}
              className="login-input"
              placeholder="login password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <AiOutlineEyeInvisible
                onClick={setVisibility}
                className="pass-visibility"
              />
            ) : (
              <AiOutlineEye
                onClick={setVisibility}
                className="pass-visibility"
              />
            )}
          </div>
          <button className="login-btn">sign in</button>
        </div> */}
    </div>
    // </div>
  );
};

export default Login;
