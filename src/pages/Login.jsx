import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';
import Spinner from '../components/ui/Spinner';

const Login = () => {
  const navigate = useNavigate();
  const { logIn, loading } = use(AuthContext);
  const location = useLocation();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(userCredential => {
        // Signed in
        // const userInfo = userCredential.user;
        navigate(`${location.state ? location.state : '/'}`);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  if (loading) return <Spinner />;

  return (
    <div className="card bg-base-100 w-2/5 shrink-0 shadow-2xl">
      <div className="card-body p-12">
        <h2 className="text-lg text-accent text-center font-semibold pb-6 border-b border-base-300">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="fieldset pt-4">
          <label className="label text-accent font-semibold">
            Email address
          </label>
          <input
            type="email"
            className="input w-full bg-base-200 border-none focus:outline-none focus:shadow"
            placeholder="Enter your email address"
            name="email"
            required
          />
          <label className="label text-accent font-semibold mt-3">
            Password
          </label>
          <input
            type="password"
            className="input w-full bg-base-200 border-none focus:outline-none focus:shadow"
            placeholder="Enter your password"
            name="password"
            required
          />
          <div>
            <a className="link link-hover text-accent-content">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Login
          </button>
          <p className="text-center text-accent-content mt-2">
            Dont’t Have An Account ?{' '}
            <Link to="/auth/signup" className="text-secondary">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
