import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const addFavorite = (id) => {
    if (!favoriteMeals.includes((meal) => meal === id)) {
      setFavoriteMeals((currentFavIds) => [...currentFavIds, id]);
    }
  };

  const removeFavorite = (id) =>
    setFavoriteMeals((currentFavIds) => currentFavIds.filter((favId) => favId !== id));

  const value = {
    ids: favoriteMeals,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
