// components/Auth/SignOutButton.jsx
import React from 'react';
import { useClerk } from '@clerk/clerk-react';

const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    <button onClick={() => signOut()} className="bg-red-500 text-white p-2 rounded">
      Sign Out
    </button>
  );
};

export default SignOutButton;
