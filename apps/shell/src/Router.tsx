import React, { Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components";
import { routePath } from "./constants";

const AppPostingLazy = React.lazy(() => import("./components/AppPosting"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={routePath.Posting} />,
      },
      {
        path: `${routePath.Posting}/*`,
        element: (
          <Suspense fallback="...posting loading">
            <AppPostingLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}
