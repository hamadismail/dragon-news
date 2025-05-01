import React from 'react';
import logo from '../../assets/images/logo.png';
import { format } from 'date-fns';

const Masthead = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} />
      <p className="mt-5 mb-2 text-accent-content">
        Journalism Without Fear or Favour
      </p>
      <p>
        {format(new Date(), 'EEEE')},{' '}
        <span className="text-accent-content">
          {format(new Date(), 'MMMM MM, yyyy')}
        </span>
      </p>
    </div>
  );
};

export default Masthead;
