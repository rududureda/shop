import React, { useContext, useState } from 'react';
import Card from '../Card/Card';

import { handleSort } from '../../utils/sortUtils';
import SortButtons from '../SortButtons/SortButtons';
import './main.scss';
import { AppContext } from '../../context/AppContext';

function Main() {
  const [searchValue, setSearchValue] = useState('');
  const { data, setData, handleAddToCard } = useContext(AppContext);
  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
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
        {!data.length && <h1>There is no product in the shop</h1>}
        {data
          .filter(
            (item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              item.description.toLowerCase().includes(searchValue)
          )
          .map((item) => (
            <Card
              key={item.title}
              // handleFavoriteButton={item.handleAddToFavorite}//favorite
              title={item.title}
              description={item.description}
              handleCardButton={handleAddToCard}
            />
          ))}
      </main>
    </div>
  );
}

export default Main;
