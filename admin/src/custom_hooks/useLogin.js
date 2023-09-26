import React, { useState } from "react";
import { request } from "../request";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../redux/snackbarSlice";
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
      const data = await request.post("/", loginData);
      console.log(data);
      dispatch(setSnackbar("login successful"));
    } catch (err) {
      console.log(err.message);
      //   dispatch(setSnackbar(err.response.data));
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
