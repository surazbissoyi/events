import React from 'react';
import { UserProfile } from '@clerk/clerk-react';

const UserProfilePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;
