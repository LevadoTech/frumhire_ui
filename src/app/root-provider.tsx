'use client';

import { Auth0Provider } from '@auth0/auth0-react';

const RootProvider = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  console.log('AUTH0_DOMAIN: ' + process.env.NEXT_PUBLIC_AUTH0_DOMAIN);
  return (
    // <Auth0Provider
    //   domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
    //   clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
    //   authorizationParams={{
    //     redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
    //     audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE
    //   }}
    // >
    //   {children}
    // </Auth0Provider>
    <Auth0Provider
      domain="dev-3lnbnd21i41bvlyu.us.auth0.com"
      clientId="mth0c30xPs3nSneqm2ukTaee5zgf1THf"
      authorizationParams={{
        redirect_uri: 'https://Freelancer/api/',
        audience: 'https://frumhire.vercel.app/'
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default RootProvider;
