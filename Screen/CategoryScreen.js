
import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

function CategoryScreen({ navigation }) {
  function CategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealOverView',{cateroryId:itemData.item.id});
    }

    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onpress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={CategoryItem}
    />
  );
}

const styles = StyleSheet.create({});

export default CategoryScreen;
