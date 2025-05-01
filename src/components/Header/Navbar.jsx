import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../../assets/images/user.png';

const Navbar = () => {
  return (
    <div className="flex relative justify-between mt-8 items-center">
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4 text-accent-content ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="career">Career</NavLink>
      </div>
      <div className="flex gap-2 ml-auto">
        <img src={user} />
        <Link to="/auth/login" className="btn btn-primary px-8 rounded-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
