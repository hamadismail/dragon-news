import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

function SocialLogin() {
  return (
    <div>
      <h2 className="text-lg font-semibold">Login With</h2>
      <div className="flex flex-col gap-1 mt-3">
        <button className="btn btn-outline text-blue-500 font-medium">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline font-medium">
          <FaGithub />
          Login With GitHub
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
