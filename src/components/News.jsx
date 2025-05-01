import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const News = () => {
  const { catId } = useParams();
  const newses = useLoaderData();
  const [newsCategory, setNewsCategory] = useState([]);

  useEffect(() => {
    const categoryId = Number(catId);
    let filteredNews = [];

    if (categoryId === 0) {
      filteredNews = newses;
    } else if (categoryId === 1) {
      filteredNews = newses.filter(news => news.others.is_today_pick === true);
    } else {
      filteredNews = newses.filter(news => news.category_id === categoryId);
    }

    setNewsCategory(filteredNews);
  }, [newses, catId]);

  return (
    <div>
      <h2 className="text-lg text-accent font-semibold mb-3">
        Dragon News Home
      </h2>
      <div>
        {newsCategory.map(news => (
          <NewsCard news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
};

export default News;
