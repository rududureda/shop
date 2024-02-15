import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Main from './components/Main/Main';
import MyCard from './components/MyCard/MyCard';
import Favorite from './components/Favorite/Favorite';

function App() {
  // const [favoriteData, setFavoriteData] = useState([]);

  // const handleAddToFavorite = (item) => {
  //   setFavoriteData([...favoriteData, item]);

  //   const filterFavoriteData = favoriteData.filter(
  //     (dataItem) => dataItem.title !== item.title
  //   );
  //   setCartData(filterFavoriteData);
  // };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my-card" element={<MyCard />} />
        <Route
          path="/favorite"
          element={
            <Favorite

            // handleAddToFavorite={handleAddToFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
