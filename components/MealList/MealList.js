
import { StyleSheet, View,FlatList } from 'react-native';
import MealItem from './MealItem';

const MealList = ({items}) => {
   function renderMealitem(itemData) {
    const item = itemData.item;
    const mealprops = {
      id:item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      
    };
   
    return (
      <View>
        <MealItem {...mealprops}  />
      </View>
    );
  }

  return (
    <View style={{flex:1}}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealitem}
      />
    </View>
  );
}

const styles = StyleSheet.create({})

export default MealList;
