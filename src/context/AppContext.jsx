import React, { useState, createContext } from 'react';
import { mockData } from '../mockData';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState(mockData);
  const [cartData, setCartData] = useState([]);
  const [favoritesData, setFavoritesData] = useState([]);

  const handleAddToCard = (item) => {
    setCartData([...cartData, item]);

    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setData(filteredData);
  };
  const handleRemoveFromCard = (item) => {
    setData([...data, item]);

    const filterCartData = cartData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setCartData(filterCartData);
  };
  const handleAddToFavorites = (item) => {
    setFavoritesData([...favoritesData, item]);
  };
  const handleRemoveFromFavorite = (item) => {
    const filterFavoriteData = favoritesData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setFavoritesData(filterFavoriteData);
  };
  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        cartData,
        setCartData,
        favoritesData,
        setFavoritesData,
        handleAddToCard,
        handleRemoveFromCard,
        handleAddToFavorites,
        handleRemoveFromFavorite,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
