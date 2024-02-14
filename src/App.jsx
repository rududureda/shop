import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { mockData } from './mockData';
// components
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Main from './components/Main/Main';
import MyCard from './components/MyCard/MyCard';
import Favorite from './components/Favorite/Favorite';

function App() {
  const [cardData, setCardData] = useState([]);
  const [data, setData] = useState(mockData);

  const handleAddToCard = (item) => {
    setCardData([...cardData, item]);

    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setData(filteredData);
  };
  const handleRemoveFromCard = (item) => {
    setData([...data, item]);

    const filterCardData = cardData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setCardData(filterCardData);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              data={data}
              setData={setData}
              handleAddToCard={handleAddToCard}
            />
          }
        />
        <Route
          path="/my-card"
          element={
            <MyCard
              cardData={cardData}
              setCardData={setCardData}
              handleRemoveFromCard={handleRemoveFromCard}
            />
          }
        />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
