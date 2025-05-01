import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import userImg from '../../assets/images/user.png';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut, setUser } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        setUser(null);
        navigate('/auth/login');
      })
      .catch(error => {
        // An error happened.
      });
  };
  return (
    <div className="flex relative justify-between pt-8 items-center">
      <div>{user && user.email}</div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-4 text-accent-content ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="career">Career</NavLink>
      </div>
      <div className="flex gap-2 ml-auto">
        <img
          className="w-10 rounded-full"
          src={`${user ? user.photoURL : userImg}`}
        />
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary px-8 rounded-none"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8 rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
