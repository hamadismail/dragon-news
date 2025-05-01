import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import Spinner from '../components/ui/Spinner';
import Masthead from '../components/Header/Masthead';
import FindUs from '../components/RightSideBar/FindUs';
import SocialLogin from '../components/RightSideBar/SocialLogin';
import QZone from '../components/RightSideBar/QZone';
import { IoMdArrowRoundBack } from 'react-icons/io';

const NewsDetails = () => {
  const { newsId } = useParams();
  const allNewses = useLoaderData();
  const [singleNews, setSingleNews] = useState(null);

  useEffect(() => {
    const newses = allNewses.find(news => news.id === newsId);
    setSingleNews(newses);
  }, [allNewses, newsId]);

  if (!singleNews) return <Spinner />;

  return (
    <div className="w-11/12 mx-auto mb-3">
      <header className="mt-8 mb-4">
        <Masthead />
        <h2 className="mt-4 text-accent font-semibold">Dragon News</h2>
      </header>
      <main className="grid grid-cols-12 gap-5">
        <section className="col-span-9 p-4 border border-base-200 rounded h-fit space-y-5">
          <img
            className="w-full object-cover rounded"
            src={singleNews.image_url}
          />
          <h2 className="text-accent font-semibold text-lg">
            {singleNews.title}
          </h2>
          <p className="text-accent-content font-normal">
            {singleNews.details}
          </p>
          <Link
            to={`/category/${singleNews.category_id}`}
            className="btn btn-secondary rounded-none font-normal"
          >
            <IoMdArrowRoundBack />
            All news in this category
          </Link>
        </section>
        <aside className="col-span-3">
          <SocialLogin />
          <FindUs />
          <QZone />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
