import { useContext } from "react";

import { type Auth0Client } from "@auth0/auth0-spa-js";
import { Auth0ClientContext } from "../providers";

const useAuth0Client = (): Auth0Client => {
  const auth0Client = useContext(Auth0ClientContext);

  if (auth0Client === null) {
    throw new Error(
      "useAuth0Client must be used within an AUth0ClientProvider"
    );
  }

  return auth0Client;
};

export default useAuth0Client;
