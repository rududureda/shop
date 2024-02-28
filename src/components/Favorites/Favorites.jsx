import React, { useContext, useState } from 'react';
import Card from '../Card/Card';

import { handleSort } from '../../utils/sortUtils';
import SortButtons from '../SortButtons/SortButtons';
import { AppContext } from '../../context/AppContext';

function Favorites() {
  const [searchValue, setSearchValue] = useState('');
  const { favoritesData, setFavoritesData } = useContext(AppContext);
  const handleSortData = (direction) => {
    const sortedData = handleSort(favoritesData, direction);
    setFavoritesData(sortedData);
  };
  return (
    <div>
      <main id="first-container">
        <div className="input-sort">
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />

          <SortButtons
            className="sort-button"
            handleSortData={handleSortData}
          />
        </div>
        {favoritesData
          .filter(
            (item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              item.description.toLowerCase().includes(searchValue)
          )
          .map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              handleCardButton={() => {}}
            />
          ))}
      </main>
    </div>
  );
}

export default Favorites;
