import { lazy } from "react";
const routes = [
  {
    path: "/",
    exact: true,
    element: lazy(() => import("./pages/Homepage")),
  },
  {
    path: "/login",
    exact: true,
    element: lazy(() => import("./pages/Login")),
  },
  {
    path: "/register",
    exact: true,
    element: lazy(() => import("./pages/Register")),
  },
  {
    path: "/contact",
    exact: true,
    element: lazy(() => import("./pages/Contact")),
  },
  {
    path: "/library",
    exact: true,
    element: lazy(() => import("./pages/Library")),
  },
  {
    path: "/watch",
    exact: true,
    element: lazy(() => import("./pages/WatchLesson")),
  },
];
export default routes;
