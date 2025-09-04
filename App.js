import { StatusBar } from "expo-status-bar";
import {  StyleSheet} from "react-native";
import CategoryScreen from "./Screen/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverViewScreen from "./Screen/MealOverViewScreen";
import MealDetailsScreen from "./Screen/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./Screen/FavoritesScreen";
import IconButton from "./components/IconButton";
import FavoriteProvider from "./store/context/favoritesContext";

const Stack = createNativeStackNavigator();
const Drawer=createDrawerNavigator();
function DrawerNavigator(){
  return <Drawer.Navigator 
    screenOptions={{
            headerStyle: {
              backgroundColor: "#331d13ff",
            },
            headerTintColor: "white",
            sceneStyle: {
              backgroundColor: "#5e2d10ff",
            },
            drawerContentStyle:{
              backgroundColor:"#96541eff"
            },
            drawerInactiveBackgroundColor:"#64340dff",
            drawerActiveBackgroundColor:"white",
            drawerActiveTintColor:"black"
          }}
    >
    <Drawer.Screen name="MealsCatorgies" component={CategoryScreen} options={
      {
        title:"All Categories",
        drawerIcon:(size,color)=><IconButton  icon={"list"} color={color} size={size}/>
      }
    }/>
    <Drawer.Screen name="Favorite" component={FavoritesScreen} options={

      {
        drawerIcon:(size,color)=><IconButton  icon={"star"} color={color} size={size}/>
      }
    }/>
  </Drawer.Navigator>
}


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#331d13ff",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#5e2d10ff",
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              
              headerShown:false
            }}
          />
          <Stack.Screen
            name="MealOverView"
            component={MealOverViewScreen}
          
          />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          <Stack.Screen name="MealCatorgies" component={CategoryScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </FavoriteProvider>
    </>
  );
}

const styles = StyleSheet.create({});
