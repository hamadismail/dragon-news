import React, { use } from 'react';
import { NavLink } from 'react-router';
import '../../styles/category.css';

const categoryPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
  const categoryData = use(categoryPromise);
  return (
    <div>
      <h2 className="text-lg text-accent font-semibold mb-3">All Category</h2>
      <div className="grid grid-cols-1 text-accent-content font-semibold  gap-1 left-sidebar">
        {categoryData.map(category => (
          <NavLink
            className="py-3 pl-8"
            to={`/category/${category.id}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
