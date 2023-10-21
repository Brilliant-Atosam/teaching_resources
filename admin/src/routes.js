import { lazy } from "react";
const routes = [
  {
    path: "/",
    exact: true,
    element: lazy(() => import("./pages/Dashboard")),
  },
];
export default routes;
