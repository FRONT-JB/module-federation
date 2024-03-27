import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { shellEvent } from "../constants";

export default function useAppEvent(type: string) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const shellNavigationHandler = (event: Event) => {
      const pathname = (event as CustomEvent).detail;

      if (pathname === location.pathname) return;

      navigate(pathname);
    };

    window.addEventListener(
      shellEvent.AppShellNavigated,
      shellNavigationHandler
    );

    return () => {
      window.removeEventListener(
        shellEvent.AppShellNavigated,
        shellNavigationHandler
      );
    };
  }, [type, location, navigate]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(shellEvent.RemoteNavigated(type), {
        detail: location.pathname,
      })
    );
  }, [type, location]);
}
