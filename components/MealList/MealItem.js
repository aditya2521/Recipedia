
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";



const MealItem = ({ id,title, imageUrl ,duration,complexity,affordability}) => {
  const navigation=useNavigation();
  function pressHandler(){

    navigation.navigate("MealDetails",{mealId:id})
  }
  return (
    <View style={styles.meal}>
      <Pressable android_ripple={{color:"gray"} } style={({pressed})=>(pressed?styles.press:null) } onPress={pressHandler}>
        <View>
            <Image source={{uri: imageUrl}} style={{ height: 200, width:"100%" }} />

        <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
        
      </Pressable>

      
    </View>
  );
};

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        margin:14
    },
    meal:{
        margin:16,
        borderRadius:8,
        overflow:"hidden",
        backgroundColor:"white",
        elevation:8
    },
   
   
    press:{
        opacity:0.5
    }
});

export default MealItem;
