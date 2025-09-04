import { createContext, useState } from "react";
import { StyleSheet} from "react-native";

export const FavoritesContext = createContext({
  ids: [],
  addfavorites: (id) => {},
  removefavorites: (id) => {},
});
function FavoriteProvider({ children }) {
  const [favoritesID, setfavoritesID] = useState([]);
  function addfavorites(id) {
    setfavoritesID((current) => [...current, id]);
  }
  function removefavorites(id) {
    setfavoritesID((current) => current.filter((mealID) => mealID !== id));
  }
  const value = {
    ids: favoritesID,
    addfavorites: addfavorites,
    removefavorites: removefavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
const styles = StyleSheet.create({});

export default FavoriteProvider;
