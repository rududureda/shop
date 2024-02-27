import React, { useContext, useState } from 'react';
import { handleSort } from '../../utils/sortUtils';
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';
import { AppContext } from '../../context/AppContext';

function MyCard() {
  const [searchValue, setSearchValue] = useState('');
  const { cartData, setCartData, handleRemoveFromCard } =
    useContext(AppContext);
  const handleSortData = (direction) => {
    const sortedData = handleSort(cartData, direction);
    setCartData(sortedData);
  };

  return (
    <div>
      <div className="input-sort">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />

        <SortButtons className="sort-button" handleSortData={handleSortData} />
      </div>
      <main id="first-container">
        {cartData
          .filter(
            (item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              item.description.toLowerCase().includes(searchValue)
          )
          .map(({ title, description }) => (
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
