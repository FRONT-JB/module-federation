import { injectFactory } from "@mf_genie/shell-router";
import routes from "./routes";

const inject = injectFactory({ routes });

export default inject;
