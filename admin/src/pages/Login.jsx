import "../styles/login.css";
import { RiAdminLine } from "react-icons/ri";
import { BsShieldLock } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiBrightnessUp } from "react-icons/ci";

import { useState } from "react";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="main-container">
      <div className="login-container">
        <div className="login-left-container">
          <div className="logo-container">
            <CiBrightnessUp className="logo-icon" />{" "}
            <h1 className="logo-text">Brilliant SC</h1>
          </div>
          <h3 className="slogan">
            Making science education accessible and enjoyable for all.
          </h3>
        </div>
        <div className="login-form-container">
          <div className="login-greetings">
            <RiAdminLine className="login-greeting-icon" />
            <h1 className="login-heading">Welcome! Sign in to continue.</h1>
          </div>
          <div className="input-container">
            <RiAdminLine />
            <input type="text" className="login-input" placeholder="login ID" />
          </div>
          <div className="input-container">
            <BsShieldLock />
            <input
              type={showPassword ? "text" : "password"}
              className="login-input"
              placeholder="login password"
            />
            {showPassword ? (
              <AiOutlineEyeInvisible
                onClick={() => setShowPassword(!showPassword)}
                className="pass-visibility"
              />
            ) : (
              <AiOutlineEye
                onClick={() => setShowPassword(!showPassword)}
                className="pass-visibility"
              />
            )}
          </div>
          <button className="login-btn">sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
