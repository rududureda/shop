import React from 'react';
import { handleSort } from '../../utils/sortUtils';
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';

function MyCard({ cardData, setCardData, handleRemoveFromCard }) {
  const handleSortData = (direction) => {
    const sortedData = handleSort(cardData, direction);
    setCardData(sortedData);
  };

  return (
    <div>
      <SortButtons className="button" handleSortData={handleSortData} />
      <main className="container">
        {cardData.map(({ title, description }) => (
          <Card
            key={title}
            title={title}
            description={description}
            handleCardButton={handleRemoveFromCard}
            card={true}
          />
        ))}
      </main>
    </div>
  );
}

export default MyCard;
