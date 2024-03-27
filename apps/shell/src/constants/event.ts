import { AppName } from "../types";

const appName: Record<AppName, string> = {
  Posting: "app-posting",
  Job: "app-job",
  Edu: "app-edu",
  Network: "app-network",
} as const;

export { appName };
