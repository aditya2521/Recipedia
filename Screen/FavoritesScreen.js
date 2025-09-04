import  { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/context/favoritesContext";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  const favorite = useContext(FavoritesContext);
  const FavoriteMeal = MEALS.filter((meal) => favorite.ids.includes(meal.id));
  if (FavoriteMeal.length === 0) {
    return (
      <View style={styles.rootcont}>
         <View style={styles.border}>
        <Text style={styles.title}>You have no favorite meals yet.</Text>
        </View>
      </View>
    );
  }
  return <MealList items={FavoriteMeal} />;
};

const styles = StyleSheet.create({
  rootcont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin:10
   
  },
  border:{
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor: "#e0953eff",
    borderRadius:20
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default FavoritesScreen;
