import "./common.css";
import React, { Suspense } from "react";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Feedback from "./components/Feedback";
import Suspense1 from "./Suspense";
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
              <Suspense fallback={<Suspense1 />}>
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
