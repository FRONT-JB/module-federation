import React, { Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { Auth0ProviderWithNavigator, Layout } from "./components";
import { routePath } from "./constants";

const AppPostingLazy = React.lazy(() => import("./components/AppPosting"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth0ProviderWithNavigator>
        <Layout />
      </Auth0ProviderWithNavigator>
    ),
    errorElement: <div>404 Not Found</div>,
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
