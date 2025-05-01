import React from 'react';
import Masthead from '../components/Header/Masthead';
import LatestNews from '../components/Header/LatestNews';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Categories from '../components/LeftSidebar/Categories';
import FindUs from '../components/RightSideBar/FindUs';
import SocialLogin from '../components/RightSideBar/SocialLogin';
import QZone from '../components/RightSideBar/QZone';

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* Header */}
      <div>
        <Masthead />
        <LatestNews />
        <Navbar />
      </div>

      {/* Main */}
      <div className="grid grid-cols-12">
        {/* Left Sidebar */}
        <div className="col-span-3">
          <Categories />
        </div>

        {/* Main Content */}
        <div className="col-span-6">
          <Outlet />
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3">
          <FindUs />
          <SocialLogin />
          <QZone />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
