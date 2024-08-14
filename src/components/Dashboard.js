import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import './Dashboard.css';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = useSelector((state) => state.dashboard.categories);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="dashboard">
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      {categories.map((category) => (
        <Category key={category.id} category={category} searchQuery={searchQuery} />
      ))}
    </div>
  );
};

export default Dashboard;
