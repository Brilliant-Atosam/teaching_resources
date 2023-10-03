import React, { useState } from "react";
import { request } from "../request";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../redux/snackbarSlice";
import { adminLogin } from "../redux/adminSlice";
const useLogin = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    loginID: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const setLoginID = (loginID) => setLoginData({ ...loginData, loginID });
  const setPassword = (password) => setLoginData({ ...loginData, password });
  const setVisibility = () => setShowPassword(!showPassword);

  const handleLogin = async () => {
    try {
      const { data } = await request.post("/auth", loginData);
      console.log(data);
      await dispatch(adminLogin(data));
      dispatch(setSnackbar("login successful"));
    } catch (err) {
      console.log(err);
    }
  };
  return {
    setLoginID,
    loginData,
    setPassword,
    setVisibility,
    showPassword,
    handleLogin,
  };
};

export default useLogin;
