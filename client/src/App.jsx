import "./common.css";
import React, { Suspense } from "react";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { Backdrop, CircularProgress } from "@mui/material";
import Feedback from "./components/Feedback";
export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Feedback />
      <Routes>
        {routes.map((route, i) => (
          <Route
            element={
              <Suspense
                fallback={
                  <div className="suspense">
                    <Backdrop
                      sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                      }}
                      open={true}
                    >
                      <CircularProgress color="inherit" />
                    </Backdrop>
                  </div>
                }
              >
                <route.element />
              </Suspense>
            }
            key={i}
            path={route.path}
          />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
