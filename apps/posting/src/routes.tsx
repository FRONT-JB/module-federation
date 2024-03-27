import React from "react";
import { AppRoutingManager } from "@mf_genie/shell-router";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRoutingManager type="app-posting" />,
    errorElement: <div>App Posting Error</div>,
    children: [
      {
        index: true,
        element: <div>App Posting Root</div>,
      },
      {
        path: "1",
        element: <div>App Posting Page 1</div>,
      },
    ],
  },
];

export default routes;
