import { type Router, type CreateRouterProps } from "./types";
import { createBrowserRouter, createMemoryRouter } from "react-router-dom";

export function createRouter({
  type,
  routes,
  basePath,
}: CreateRouterProps): Router {
  switch (type) {
    case "browser":
      return createBrowserRouter(routes);
    case "memory":
      return createMemoryRouter(routes, { initialEntries: [basePath || "/"] });
  }
}
