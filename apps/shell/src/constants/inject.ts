import { RouterType } from "@mf_genie/shell-router";
import { AppName } from "../types";

const routerType: Record<AppName, RouterType> = {
  Posting: "memory",
  Job: "memory",
  Edu: "memory",
  Network: "memory",
} as const;

export { routerType };
