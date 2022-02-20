import { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

function AppProvider(props) {
  const [alertState, setAlertState] = useState('');
  const [alertText, setAlertText] = useState('');
  const [favourites, setFavourites] = useState(
    () => JSON.parse(localStorage.getItem('favourites')) || [],
  );

  const handleAddFavouriteRecipe = (slug) => {
    if (favourites.some((favourite) => favourite === slug)) {
      setFavourites(favourites.filter((favourite) => favourite !== slug));
    } else {
      setFavourites([...favourites, slug]);
    }
  };

  const handleSetAlert = (text) => {
    setAlertState('active');
    setAlertText(text);
    setTimeout(() => setAlertState(''), 3000);
  };

  const value = {
    favourites: favourites,
    handleAddFavouriteRecipe: handleAddFavouriteRecipe,
    setFavourites: setFavourites,
    handleSetAlert: handleSetAlert,
    alertState: alertState,
    alertText: alertText,
  };
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  return (
    <>
      <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    </>
  );
}

export { AppContext, AppProvider };
