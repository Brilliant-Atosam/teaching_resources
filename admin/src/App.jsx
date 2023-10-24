import "./default.css";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Suspense } from "react";
import SuspenseComponent from "./Suspense";
// import Login from "./pages/Login";
// import SnackbarComponent from "./components/Snackbar";
import { useSelector } from "react-redux";
import Topbar from "./components/nav/Topbar";
import SideMenu from "./components/nav/SideMenu";
import Dashboard from "./pages/Dashboard";
const App = () => {
  const admin = useSelector((state) => state.admin.adminCredential);
  return (
    <>
      {!admin && <Topbar />}
      <Dashboard />
      {/* {!admin && <SideMenu />} */}
      {/* <Routes>
        {routes.map((route, i) => (
          <Route
            element={
              // admin ? (
              //   <Login />
              // ) : (
              <Suspense fallback={<SuspenseComponent />}>
                <route.element />
              </Suspense>
              // )
            }
            path={route.path}
            key={i}
          />
        ))}
      </Routes> */}
      {/* <SnackbarComponent /> */}
    </>
  );
};

export default App;
