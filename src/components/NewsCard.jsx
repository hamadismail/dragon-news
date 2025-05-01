import React from 'react';
import { FaShareAlt, FaBookmark, FaEye, FaStar } from 'react-icons/fa';
import { format } from 'date-fns';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    image_url,
    thumbnail_url,
    details,
    author,
    total_view,
    rating,
  } = news;

  return (
    <div className="card bg-base-100 shadow-sm rounded-md mb-4">
      {/* Card Header */}
      <div className="flex justify-between items-center p-4 bg-base-200 mb-4">
        <div className="flex items-center gap-4">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="text-sm">
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-gray-500 text-xs">
              {format(new Date(author.published_date), 'yyyy-MM-dd')}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 text-lg font-semibold leading-6 text-accent">
        {title}
      </h2>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img src={thumbnail_url} alt="news" className="rounded w-full" />
      </figure>

      {/* Details */}
      <div className="px-4 pt-4 pb-2 text-sm text-accent-content">
        {details.length > 300 ? (
          <>
            {details.slice(0, 300)}...
            <Link
              to={`/news-details/${id}`}
              className="text-blue-600 cursor-pointer font-semibold ml-1"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 pt-2">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(rating.number)
                  ? 'text-orange-400'
                  : 'text-gray-300'
              }
            />
          ))}
          <span className="text-gray-700 font-semibold ml-1">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
