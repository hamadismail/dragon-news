import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className="bg-base-300 p-2 flex gap-4 items-center mt-8">
      <div className="bg-secondary text-base-100 px-5 py-2">Latest</div>
      <div>
        <Marquee className="flex" pauseOnHover={true} speed={50}>
          <p className="mr-5">
            Match Highlights: Germany vs Spain — as it happened! Spain Beat
            Germany at last minutes drama.
          </p>
          <p className="mr-5">
            Match Highlights: Germany vs Spain — as it happened! Spain Beat
            Germany at last minutes drama.
          </p>
          <p className="mr-5">
            Match Highlights: Germany vs Spain — as it happened! Spain Beat
            Germany at last minutes drama.
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
