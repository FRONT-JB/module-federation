import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { shellEvent } from "../constants";

export default function useShellEvent(type: string, basename: string) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const appNavigateEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent).detail;

      const newPathname =
        pathname === "/" ? basename : `${basename}${pathname}`;

      if (newPathname === location.pathname) {
        return;
      }

      navigate(newPathname);
    };

    window.addEventListener(
      shellEvent.RemoteNavigated(type),
      appNavigateEventHandler
    );

    return () => {
      window.removeEventListener(
        shellEvent.RemoteNavigated(type),
        appNavigateEventHandler
      );
    };
  }, [type, basename, location, navigate]);

  useEffect(() => {
    if (location.pathname.startsWith(basename)) {
      window.dispatchEvent(
        new CustomEvent(shellEvent.AppShellNavigated, {
          detail: location.pathname.replace(basename, ""),
        })
      );
    }
  }, [basename, location]);
}
