import React from 'react';
import swimming from '../../assets/images/swimming.png';
import classes from '../../assets/images/class.png';
import playground from '../../assets/images/playground.png';
import rightBg from '../../assets/images/bg.png';

const QZone = () => {
  return (
    <div className="bg-base-200 mt-4">
      <div className="p-4">
        <h2 className="text-lg text-accent font-semibold">QZone</h2>

        <div className="pt-2 flex flex-col gap-4">
          <img src={swimming} />
          <img src={classes} />
          <img src={playground} />
        </div>
      </div>
      <img className="w-full" src={rightBg} />
    </div>
  );
};

export default QZone;
