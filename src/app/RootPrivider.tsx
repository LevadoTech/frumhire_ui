'use client';

import { Auth0Provider } from '@auth0/auth0-react';

const RootProvider = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // Add your Auth0 domain, client ID, and redirect URI here
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI;
  console.log('Domain:', domain);
  console.log('Client ID:', clientId);
  console.log('Redirect URI:', redirectUri);
  return (
    <Auth0Provider
      domain={domain!}
      clientId={clientId!}
      authorizationParams={{
        redirect_uri: redirectUri!
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default RootProvider;
