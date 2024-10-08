'use client';

import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@/components/button/button';
import { classnames } from '@/utils/classnames';
import Link from 'next/link';

const Login = () => {
  // styles
  const image = classnames(['h-16 w-16 cursor-pointer rounded-full']);
  const popupMenu = classnames([
    'absolute right-0 z-10 mt-2 w-60 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'
  ]);
  const itemInMenu = classnames([
    'px-4 py-2 block text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900'
  ]);
  // properties
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleSaveUser = async () => {
  //   if (isAuthenticated && user) {
  //     const email = user.email;
  //     console.log(user);

  //     // save user to database
  //     try {
  //       const response = await fetch('http://localhost:YOUR_API_PORT/save-user', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ email }),
  //       });

  //       if (response.ok) {
  //         console.log('User saved successfully!');
  //       } else {
  //         console.error('Failed to save user');
  //       }
  //     } catch (error) {
  //       console.error('Error saving user:', error);
  //     }
  //   }
  // };

  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()} clear size="small" className="font-bold">
          Log In/Register
        </Button>
      ) : (
        <div className="relative inline-block text-left">
          <img src={user?.picture} alt={user?.name} className={image} onClick={toggleMenu} />

          {isOpen && (
            <div className={popupMenu}>
              {' '}
              <div
                className="py-2"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link href="/profile" className={itemInMenu} role="menuitem">
                  Profile
                </Link>
                <Link href="/settings" className={itemInMenu} role="menuitem">
                  Settings
                </Link>
                <Link
                  href="/"
                  className={itemInMenu}
                  role="menuitem"
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
