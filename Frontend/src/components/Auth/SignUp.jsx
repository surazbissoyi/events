import { SignUp } from '@clerk/clerk-react';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
};

export default SignUpPage;
