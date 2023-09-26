import "./styles/common.css";
import Navbar from "./components/nav/Navbar";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Suspense, useState } from "react";
import SuspenseComponent from "./Suspense";
import Login from "./pages/Login";
import SnackbarComponent from "./components/Snackbar";
const App = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      {user && <Navbar />}
      <Routes>
        {routes.map((route, i) => (
          <Route
            element={
              !user ? (
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
