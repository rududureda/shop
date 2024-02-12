import React from 'react';
import './card.scss';

function Card({ title, description, setCardData }) {
  const handleAddToCard = () => {
    setCardData([{ title, description }]);
  };
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCard}>Add to card</button>
    </div>
  );
}

export default Card;
