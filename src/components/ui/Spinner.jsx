import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="flex justify-center">
      <ScaleLoader color="#403f3f" />
    </div>
  );
};

export default Spinner;
