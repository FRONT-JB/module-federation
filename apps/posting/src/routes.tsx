import React from "react";
import { AppRoutingManager } from "@mf_genie/shell-router";
import { RouteObject } from "react-router-dom";
import { Auth0ClientProvider } from "./providers";
import { PageHome } from "./pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <AppRoutingManager type="app-posting" />
      </Auth0ClientProvider>
    ),
    errorElement: <div>App Posting Error</div>,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
    ],
  },
];

export default routes;
