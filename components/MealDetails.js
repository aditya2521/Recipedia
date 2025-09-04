
import { StyleSheet, View,Text } from 'react-native';

const MealDetails = ({duration,complexity,affordability,style,textStyle}) => {
    return (
        <View style={[styles.details,style]}>
                    <Text style={[styles.item ,textStyle]}>{duration}m</Text>
                    <Text style={[styles.item ,textStyle]}>{complexity.toUpperCase()}</Text>
                    <Text style={[styles.item ,textStyle]}>{affordability.toUpperCase()}</Text>
                </View>
    );
}
 
const styles = StyleSheet.create({
     details:{
        flexDirection:"row",
        alignItems:"center",
        padding:8,
        justifyContent:"center"
    },
     item:{
        marginHorizontal:4,
        fontSize:16,
        fontWeight:"heavy"
    },
})

export default MealDetails;
