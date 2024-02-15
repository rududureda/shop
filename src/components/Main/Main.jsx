import React, { useContext } from 'react';
import Card from '../Card/Card';

import { handleSort } from '../../utils/sortUtils';
import SortButtons from '../SortButtons/SortButtons';
import './main.scss';
import { AppContext } from '../../context/AppContext';

function Main() {
  const {data, setData, handleAddToCard} = useContext(AppContext);
  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  // const handleSortData = () => {
  //   const sortedData = data.toSorted((a, b) => {
  //     let fa = a.title.toLowerCase(),
  //       fb = b.title.toLowerCase();

  //     if (fa < fb) return -1;

  //     if (fa > fb) return 1;

  //     return 0;
  //   });

  //   setData(sortedData);
  // };

  // const handleSortDataAZ = () => {
  //   const sortedData = data.toSorted((a, b) => {
  //     let fa = a.title.toLowerCase(),
  //       fb = b.title.toLowerCase();

  //     if (fa < fb) return 1;

  //     if (fa > fb) return -1;

  //     return 0;
  //   });
  //   console.log('data', data);
  //   setData(sortedData);
  // };
  // return (
  //   <main className="main-container">
  //     <div className="main-action-btn">
  //       <button
  //         onClick={() => {
  //           handleSortDataAZ(data, 'az');
  //         }}
  //       >
  //         Sort Z-A
  //       </button>
  //       <button
  //         onClick={() => {
  //           handleSortData(data, 'za');
  //         }}
  //       >
  //         Sort A-Z
  //       </button>
  //     </div>
  return (
    <div>
      <SortButtons className="sort-button" handleSortData={handleSortData} />
      <main className="container">
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
