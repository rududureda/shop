import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './card.scss';

function Card({ title, description, handleCardButton, card }) {
  const { favoritesData, handleAddToFavorites, handleRemoveFromFavorite } =
    useContext(AppContext);

  const isFavorite = favoritesData.some((item) => item.title === title);

  const handleAddToCard = () => {
    handleCardButton({ title, description });
  };
  return (
    <div className="card">
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
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCard}>
        {card ? 'Remove from card' : 'Add to card'}
      </button>
    </div>
  );
}

export default Card;
