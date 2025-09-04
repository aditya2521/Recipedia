import  { useContext } from "react";
import { StyleSheet, View, Text, Image, ScrollView,Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Mealdetails/Subtitle";
import List from "../components/Mealdetails/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favoritesContext";




const MealDetailsScreen = ({ route, navigation}) => {
  const favorite=useContext(FavoritesContext)
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const MealsFavoites=favorite.ids.includes(mealId)
  function press(){
    if(MealsFavoites){
      favorite.removefavorites(mealId)
    }
    else{
      favorite.addfavorites(mealId)
    }
    
  }
  
  useLayoutEffect(()=>{
   
    navigation.setOptions({
         
        headerRight:()=>{
            return <>
            
             <IconButton onPress={press} icon={MealsFavoites?"star":"star-outline"} color={"white"}/>
            
              </>
             
            
            
        }
         
    },[navigation,press,MealsFavoites]);
     
    
  })
  return (
    <ScrollView>
      <View>
        <Image
          source={{ uri: selectedMeal.imageUrl }}
          style={{ height: 300, width: "100%" }}
        />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
          <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailtext}
          />
        </View>
        <View style={styles.listcont}>
        <View style={styles.list }>
          <Subtitle>ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailtext: {
    color: "white",
  },
  list:{
maxWidth:"80%"
  },
  listcont:{
    alignItems:"center",
    marginBottom:25
  }
});

export default MealDetailsScreen;
