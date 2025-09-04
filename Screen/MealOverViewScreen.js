import {useLayoutEffect}from "react";
import { StyleSheet} from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList/MealList";

const MealOverViewScreen = ({ navigation, route }) => {
  const CatId = route.params.cateroryId;
  const display = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(CatId) >= 0;
  });
  useLayoutEffect(()=>{
     const categorytitle=CATEGORIES.find((category)=>category.id===CatId).title;
    
      navigation.setOptions({
      title:categorytitle,
       
      

  })

  },[CatId,navigation])
  return <MealList items={display}/>

 
 
  
};

const styles = StyleSheet.create({});

export default MealOverViewScreen;
