import React, { useContext } from 'react';
import Card from '../Card/Card';

import { handleSort } from '../../utils/sortUtils';
import SortButtons from '../SortButtons/SortButtons';
import { AppContext } from '../../context/AppContext';

function Favorites() {
  const { favoritesData, setFavoritesData } = useContext(AppContext);
  const handleSortData = (direction) => {
    const sortedData = handleSort(favoritesData, direction);
    setFavoritesData(sortedData);
  };
  return (
    <div>
      <SortButtons className="sort-button" handleSortData={handleSortData} />
      <main className="container">
        {favoritesData.map((item) => (
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
