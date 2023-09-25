import { lazy } from "react";
const routes = [
  {
    path: "/",
    exact: true,
    element: lazy(() => import("./pages/Homepage")),
  },
  {
    path: "/scheme_of_work",
    exact: true,
    element: lazy(() => import("./pages/SchemeOfWork")),
  },
  {
    path: "/exams",
    exact: true,
    element: lazy(() => import("./pages/Exams")),
  },
  {
    path: "/detailed_notes",
    exact: true,
    element: lazy(() => import("./pages/DetailedNotes")),
  },
  {
    path: "/lesson_plan",
    exact: true,
    element: lazy(() => import("./pages/LessonPlan")),
  },
  {
    path: "/teaching_notes",
    exact: true,
    element: lazy(() => import("./pages/TeachingNotes")),
  },
  {
    path: "/video/details/:id",
    exact: true,
    element: lazy(() => import("./pages/VideoDetails")),
  },
  {
    path: "doc/details/:id",
    exact: true,
    element: lazy(() => import("./pages/DocxDetails")),
  },
];
export default routes;
