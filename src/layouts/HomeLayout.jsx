import React, { Suspense } from 'react';
import Masthead from '../components/Header/Masthead';
import LatestNews from '../components/Header/LatestNews';
import Navbar from '../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Categories from '../components/LeftSidebar/Categories';
import FindUs from '../components/RightSideBar/FindUs';
import SocialLogin from '../components/RightSideBar/SocialLogin';
import QZone from '../components/RightSideBar/QZone';
import Spinner from '../components/ui/Spinner';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div className="w-11/12 mx-auto my-8">
      {/* Header */}
      <div>
        <Masthead />
        <LatestNews />
        <Navbar />
      </div>

      {/* Main */}
      <main className="grid grid-cols-12 mt-8 gap-4">
        {/* Left Sidebar */}
        <div className="col-span-3 sticky top-0 h-fit">
          <Suspense fallback={<Spinner />}>
            <Categories />
          </Suspense>
        </div>

        {/* Main Content */}
        <div className="col-span-6">
          {isNavigating ? <Spinner /> : <Outlet />}
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 sticky top-0 h-fit">
          <SocialLogin />
          <FindUs />
          <QZone />
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
