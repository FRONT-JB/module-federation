import React from "react";
import { Outlet } from "react-router-dom";
import { AppRoutingManagerProps } from "../types";
import useAppEvent from "../hooks/useAppEvent";

const AppRoutingManager: React.FC<AppRoutingManagerProps> = ({ type }) => {
  useAppEvent(type);

  return <Outlet />;
};

export default AppRoutingManager;
