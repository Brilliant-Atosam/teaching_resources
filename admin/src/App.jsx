import "./styles/common.css";
import Navbar from "./components/nav/Navbar";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Suspense, useState } from "react";
import SuspenseComponent from "./Suspense";
import Login from "./pages/Login";
import SnackbarComponent from "./components/Snackbar";
import { useSelector } from "react-redux";
import Upload from "./pages/Upload";
const App = () => {
  const admin = useSelector((state) => state.admin.adminCredential);
  return (
    <>
      {!admin && <Navbar />}
      <Routes>
        {routes.map((route, i) => (
          <Route
            element={
              admin ? (
                <Login />
              ) : (
                <Suspense fallback={<SuspenseComponent />}>
                  <route.element />
                </Suspense>
              )
            }
            path={route.path}
            key={i}
          />
        ))}
      </Routes>
      <SnackbarComponent />
    </>
  );
};

export default App;
