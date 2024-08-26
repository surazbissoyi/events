import { SignIn } from '@clerk/clerk-react';
import React from 'react';

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
};

export default SignInPage;
