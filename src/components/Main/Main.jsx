import React, { useState } from 'react';
import { mockData } from '../../mockData';

import Card from '../Card/Card';
import './main.scss';

function Main({ setCardData }) {
  const [data, setData] = useState(mockData);
  const handleSortData = () => {
    const sortedData = data.toSorted((a, b) => {
      let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

      if (fa < fb) return -1;

      if (fa > fb) return 1;

      return 0;
    });

    setData(sortedData);
  };

  const handleSortDataAZ = () => {
    const sortedData = data.toSorted((a, b) => {
      let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

      if (fa < fb) return 1;

      if (fa > fb) return -1;

      return 0;
    });
    console.log('data', data);
    setData(sortedData);
  };
  return (
    <main className="main-container">
      <div className="main-action-btn">
        <button
          onClick={() => {
            handleSortDataAZ('az');
          }}
        >
          Sort Z-A
        </button>
        <button
          onClick={() => {
            handleSortData('za');
          }}
        >
          Sort A-Z
        </button>
      </div>
      {data.map((item) => {
        return (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            setCardData={setCardData}
          />
        );
      })}
    </main>
  );
}

export default Main;
