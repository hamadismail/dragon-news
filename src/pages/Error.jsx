import React from 'react';
import { useNavigation, useRouteError } from 'react-router';
import Spinner from '../components/ui/Spinner';
import Masthead from '../components/Header/Masthead';
import { Link } from 'react-router';

const Error = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  const error = useRouteError();

  return (
    <div className="mt-12">
      <Masthead />
      {isNavigating ? (
        <Spinner />
      ) : (
        <div className="mt-12 flex justify-center items-center text-center">
          <div>
            <h1 className="mb-4 text-5xl text-accent">
              {error?.status || 404}
            </h1>
            <p className="mb-6 text-xl text-accent-content md:text-2xl">
              {error?.error?.message || 'Something Went Wrong!'}
            </p>
            <Link to="/">
              <button className="btn btn-wide bg-blue-600 text-white border-none rounded-3xl">
                Go To Home Page
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Error;
