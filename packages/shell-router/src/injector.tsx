import { createRoot } from "react-dom/client";
import { createRouter } from "./router";
import { InjectFactoryProps, InjectFactoryType } from "./types";
import { RouterProvider } from "react-router-dom";

function injectFactory({ routes }: InjectFactoryProps) {
  return ({ rootElement, basePath, routerType }: InjectFactoryType) => {
    const router = createRouter({
      type: routerType,
      routes,
      basePath,
    });

    const root = createRoot(rootElement);

    root.render(<RouterProvider router={router} />);

    return () => queueMicrotask(() => root.unmount());
  };
}

export default injectFactory;
