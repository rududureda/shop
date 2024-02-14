import React from 'react';
import './favorite.scss';
import { handleSort } from '../../utils/sortUtils';
import SortButtons from '../SortButtons/SortButtons';

function Favorite({ data, setData }) {
  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };
  return (
    <div>
      <SortButtons className="button" handleSortData={handleSortData} />
      <div className="favorite">
        <h1>there will be your favorite products</h1>
      </div>
      {data.map (({ title, description }) => (
        <Favorite key={title} title={title} description={description} />
      ))}
      ;
    </div>
  );
}

export default Favorite;
