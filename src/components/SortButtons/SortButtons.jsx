import React from 'react';
import './sortButtons.scss';

function SortButtons({ handleSortData }) {
  return (
    <div className="sort-btn" >
      <button
        className="AZ-btn"
        onClick={() => {
          handleSortData('az');
        }}
      >
        Sort A-Z
      </button>
      <button className="AZ-btn" onClick={handleSortData}>
        Sort Z-A
      </button>
    </div>
  );
}

export default SortButtons;
