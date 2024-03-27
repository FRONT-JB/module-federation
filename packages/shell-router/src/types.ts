import { type RouteObject } from "react-router-dom";
import { createBrowserRouter, createMemoryRouter } from "react-router-dom";

type Router =
  | ReturnType<typeof createBrowserRouter>
  | ReturnType<typeof createMemoryRouter>;

type RouterType = "browser" | "memory";

interface InjectFactoryProps {
  routes: RouteObject[];
}

interface InjectFactoryType {
  rootElement: HTMLElement;
  basePath?: string;
  routerType: RouterType;
}

interface CreateRouterProps {
  type: RouterType;
  routes: RouteObject[];
  basePath?: string;
}

interface AppRoutingManagerProps {
  type: string;
}

export type {
  Router,
  RouterType,
  InjectFactoryProps,
  InjectFactoryType,
  CreateRouterProps,
  AppRoutingManagerProps,
};
