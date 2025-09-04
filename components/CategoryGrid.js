
import { Pressable, StyleSheet, View , Text, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function CategoryGrid({title,color,onpress}){
   const navigation= useNavigation();
    return (
        <View style={[styles.gridItem ]}>
            <Pressable android_ripple={{color:"#e6f2ffff"}} style={({pressed})=>[styles.Button,pressed?styles.buttonpressed:null]} onPress={onpress} >
                <View style={[styles.inner,{backgroundColor:color}]}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:16,
         backgroundColor:"white",
        
        elevation:10,
        overflow:Platform.OS==='android'?'hidden':'visible'

    },
    inner:{
        flex:1,
       alignItems:"center",
       justifyContent:"center",
       padding:16,
      
    },
    Button:{
        flex:1
    },
    title:{
        fontWeight:"bold",
        fontSize:20
    },
    buttonpressed:{
        opacity:0.5

    }
   
    
       


    


})

export default CategoryGrid;
