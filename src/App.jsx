import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import Main from './components/Main/Main';
import MyCard from './components/MyCard/MyCard';
import Favorites from './components/Favorites/Favorites';

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
          path="/favorites"
          element={
            <Favorites

            // handleAddToFavorite={handleAddToFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
