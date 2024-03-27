import { AppName } from "../types";

const routePrefix: Record<AppName, string> = {
  Posting: "posting",
} as const;

const routePath = {
  Root: "/",
  Posting: `/${routePrefix.Posting}`,
  PostingDetail: (id: number) => `/${routePrefix.Posting}/${id}`,
} as const;

export { routePrefix, routePath };
