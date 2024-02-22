import React, { useContext } from 'react';
import Card from '../Card/Card';

import { handleSort } from '../../utils/sortUtils';
import SortButtons from '../SortButtons/SortButtons';
import './main.scss';
import { AppContext } from '../../context/AppContext';

function Main() {
  const { data, setData, handleAddToCard } = useContext(AppContext);
  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  return (
    <div>
      <SortButtons className="sort-button" handleSortData={handleSortData} />
      <main id="first-container">
        {data.map((item) => (
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
