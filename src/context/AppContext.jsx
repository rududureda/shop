import React, { useState, createContext, useEffect } from 'react';
import { mockData } from '../mockData';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('data')) || mockData
  );
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem('cartData')) || []
  );
  const [favoritesData, setFavoritesData] = useState(
    JSON.parse(localStorage.getItem('favoritesData')) || []
  );

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [data, cartData]);

  useEffect(() => {
    localStorage.setItem('favoritesData', JSON.stringify(favoritesData));
  }, [favoritesData]);

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
