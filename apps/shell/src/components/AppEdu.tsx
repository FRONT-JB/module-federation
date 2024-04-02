import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useShellEvent } from "@mf_genie/shell-router";

import inject from "edu/injector";
import { appName, routePath, routerType } from "../constants";

function AppEdu() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isFirstRunRef = useRef(true);

  const umountRef = useRef(() => {});

  const location = useLocation();

  useShellEvent(appName.Edu, routePath.Edu);

  useEffect(() => {
    if (!isFirstRunRef.current) return;

    umountRef.current = inject({
      routerType: routerType.Edu,
      // runtime에 문제가 없으므로 강제처리
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(routePath.Edu, ""),
    });

    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => umountRef.current, []);

  return <div ref={wrapperRef} id={appName.Edu} />;
}

export default AppEdu;
