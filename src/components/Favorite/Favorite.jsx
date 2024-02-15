import React from 'react';
import './favorite.scss';
import { handleSort } from '../../utils/sortUtils';
import SortButtons from '../SortButtons/SortButtons';

// export function myFavorite({
//   title,
//   description,
//   handleFavoriteButton,
//   favorite,
// }) {
//   const handleAddToFavorite = () => {
//     handleFavoriteButton({ title, description });
//   };
//   return (
//     <div className="fav">
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <button className='fav-but' onClick={handleAddToFavorite}>
//         {favorite ? 'Remove from favorite' : 'Add to favorite'}
//       </button>
//     </div>
//   );
// }

function Favorite({ cartData, setData }) {
  const handleSortData = (direction) => {
    const sortedData = handleSort(cartData, direction);
    setData(sortedData);
  };
  return (
    <div>
      <SortButtons className="button" handleSortData={handleSortData} />
      <div className="favorite">
        <h1> there will be your favorite products</h1>
        {cartData.map((item, handleAddToCard) => (
          <Favorite
            key={item.title}
            title={item.title}
            description={item.description}
            handleCardButton={handleAddToCard}
            favorite={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
