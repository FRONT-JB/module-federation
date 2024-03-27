import { AppName } from "../types";

const routePrefix: Record<AppName, string> = {
  Posting: "posting",
  Job: "job",
  Edu: "edu",
  Network: "network",
} as const;

const routePath = {
  Root: "/",
  Posting: `/${routePrefix.Posting}`,
  Edu: `/${routePrefix.Edu}`,
  Job: `/${routePrefix.Job}`,
  Network: `/${routePrefix.Network}`,
} as const;

export { routePrefix, routePath };
