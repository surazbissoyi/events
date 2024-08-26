// src/App.jsx
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import EventDetails from './components/Event/EventDetails'; // Ensure this path is correct
import CreateEventPage from './pages/CreateEventPage';
import UserProfilePage from './pages/UserProfilePage';
import SignInPage from './components/Auth/SignIn';
import SignUpPage from './components/Auth/SignUp';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<EventDetails />} /> {/* Ensure this matches your URL */}
          <Route
            path="/create-event"
            element={
              <SignedIn>
                <CreateEventPage />
              </SignedIn>
            }
          />
          <Route
            path="/profile"
            element={
              <SignedIn>
                <UserProfilePage />
              </SignedIn>
            }
          />
          <Route
            path="/sign-in"
            element={<SignInPage />}
          />
          <Route
            path="/sign-up"
            element={<SignUpPage />}
          />
          <Route
            path="/protected"
            element={
              <SignedIn>
                <div>Your Protected Content Here</div>
              </SignedIn>
            }
          />
          <Route
            path="/redirect-to-sign-in"
            element={
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
