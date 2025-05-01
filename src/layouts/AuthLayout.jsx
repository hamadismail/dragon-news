import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <div className="flex justify-center mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
