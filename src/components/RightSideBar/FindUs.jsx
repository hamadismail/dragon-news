import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className="text-lg text-accent font-semibold mt-8">Find Us On</h2>
      <div className="join join-vertical w-full mt-3">
        <button className="btn join-item bg-base-100 justify-start text-accent-content font-medium">
          <FaFacebook className="text-blue-600" />
          Facebook
        </button>
        <button className="btn join-item bg-base-100 justify-start text-accent-content font-medium">
          <FaTwitter className="text-sky-600 " />
          Twitter
        </button>
        <button className="btn join-item bg-base-100 justify-start text-accent-content font-medium">
          <FaInstagram className="text-pink-600" />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
