import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import SignOutButton from '../Auth/SignOutButton';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Event Management
        </Link>
        <nav>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <SignedIn>
            <Link to="/create-event" className="mr-4">
              Create Event
            </Link>
            <Link to="/profile" className="mr-4">
              Profile
            </Link>
            <SignOutButton />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in" className="mr-4">
              Sign In
            </Link>
            <Link to="/sign-up" className="mr-4">
              Sign Up
            </Link>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
};

export default Header;
