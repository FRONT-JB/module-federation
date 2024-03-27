import { AppName } from "../types";

const appName: Record<AppName, string> = {
  Posting: "app-posting",
} as const;

export { appName };
