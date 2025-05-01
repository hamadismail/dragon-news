import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/images/user.png';

const Navbar = () => {
  return (
    <div className="flex relative justify-between mt-8 items-center">
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4 text-accent-content ">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Career</NavLink>
      </div>
      <div className="flex gap-2 ml-auto">
        <img src={user} />
        <button className="btn btn-primary px-8 rounded-none">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
