import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import useLogin from "../custom_hooks/useLogin";
const LoginComponent = () => {
  const {
    setLoginID,
    loginData,
    setPassword,
    setVisibility,
    showPassword,
    handleLogin,
  } = useLogin();
  
  return (
    <div className="login-form-container">
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
          <AiOutlineEye onClick={setVisibility} className="pass-visibility" />
        )}
      </div>
      <button
        onClick={handleLogin}
        className="login-btn"
        disabled={
          loginData.loginID.length < 5
            ? true
            : loginData.password.length < 5
            ? true
            : false
        }
      >
        sign in
      </button>
    </div>
  );
};

export default LoginComponent;
