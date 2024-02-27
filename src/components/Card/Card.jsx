import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import './card.scss';

function Card({ title, description, handleCardButton, card }) {
  const [showMore, setShowMore] = useState(false);
  const { favoritesData, handleAddToFavorites, handleRemoveFromFavorite } =
    useContext(AppContext);

  const isFavorite = favoritesData.some((item) => item.title === title);

  const handleAddToCard = () => {
    handleCardButton({ title, description });
  };
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  return (
    <div className="item">
      <h3>{title}</h3>

      <div className="wrap-favorite-info">
        <div>
          <FontAwesomeIcon
            icon={faHeart}
            className={`favorite-icon ${
              isFavorite ? 'favorite-icon--active' : ''
            } `}
            onClick={() => {
              isFavorite
                ? handleRemoveFromFavorite({ title, description })
                : handleAddToFavorites({ title, description });
            }}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCircleInfo}
            onClick={handleMoreClick}
            className={`info-icon ${showMore ? 'info-icon--active' : ''} `}
          />
        </div>
      </div>
      {showMore && <p>{description}</p>}
      <button onClick={handleAddToCard}>
        {card ? 'Remove from card' : 'Add to card'}
      </button>
    </div>
  );
}

export default Card;
