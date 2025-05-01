import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="w-11/12 mx-auto">
        <Navbar />
        <div className="flex justify-center my-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
