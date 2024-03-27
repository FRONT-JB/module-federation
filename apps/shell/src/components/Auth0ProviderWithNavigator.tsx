import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { type AppState, Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithNavigator: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const navigate = useNavigate();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  // 심각한 문제가 발생할 수 있기 때문에 throw를 해줘도 된다
  if (!(domain && clientId && redirect_uri)) return null;

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigator;
