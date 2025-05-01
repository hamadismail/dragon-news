import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="card bg-base-100 w-2/5 shrink-0 shadow-2xl">
      <div className="card-body p-12">
        <h2 className="text-lg text-accent text-center font-semibold pb-6 border-b border-base-300">
          Login your account
        </h2>
        <fieldset className="fieldset pt-4">
          <label className="label text-accent font-semibold">
            Email address
          </label>
          <input
            type="email"
            className="input w-full bg-base-200 border-none focus:outline-none focus:shadow"
            placeholder="Enter your email address"
          />
          <label className="label text-accent font-semibold mt-3">
            Password
          </label>
          <input
            type="password"
            className="input w-full bg-base-200 border-none focus:outline-none focus:shadow"
            placeholder="Enter your password"
          />
          <div>
            <a className="link link-hover text-accent-content">
              Forgot password?
            </a>
          </div>
          <button className="btn btn-primary mt-4">Login</button>
          <p className="text-center text-accent-content mt-2">
            Dont’t Have An Account ?{' '}
            <Link to="/auth/signup" className="text-secondary">
              Register
            </Link>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
