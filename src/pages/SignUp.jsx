import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
  const { signUp, setUser, user } = use(AuthContext);

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
      .then(userCredential => {
        // Signed up
        const userInfo = userCredential.user;
        setUser(userInfo);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  console.log(user);

  return (
    <div className="card bg-base-100 w-2/5 shrink-0 shadow-2xl">
      <div className="card-body px-12 pt-8 pb-6">
        <h2 className="text-lg text-accent text-center font-semibold pb-6 border-b border-base-300">
          Register your account
        </h2>
        <form onSubmit={handleSignUp} className="fieldset pt-4">
          {/* Name */}
          <label className="label text-accent font-semibold">Your Name</label>
          <input
            type="text"
            className="input w-full bg-base-200 border-none focus:outline-none focus:shadow"
            placeholder="Enter your name"
            name="name"
            required
          />

          {/* Photo Url */}
          <label className="label text-accent font-semibold mt-2">
            Photo URL
          </label>
          <input
            type="text"
            className="input w-full bg-base-200 border-none focus:outline-none focus:shadow"
            placeholder="Enter your password"
            name="photo"
            required
          />

          {/* Email */}
          <label className="label text-accent font-semibold mt-2">
            Email address
          </label>
          <input
            type="email"
            className="input w-full bg-base-200 border-none focus:outline-none focus:shadow"
            placeholder="Enter your email address"
            name="email"
            required
          />

          {/* Password */}
          <label className="label text-accent font-semibold mt-2">
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
            <label className="label">
              <input type="checkbox" className="checkbox rounded w-4 h-4" />
              Accept Term & Conditions
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Register
          </button>
          <p className="text-center text-accent-content mt-2">
            Already Have An Account ?{' '}
            <Link to="/auth/login" className="text-secondary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
