import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.titlecont}>
      <Text style={styles.sybtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sybtitle: {
    color: "#eeb16cff",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  titlecont: {
    marginHorizontal: 12,

    borderBottomWidth: 2,
    borderBottomColor: "#eeb16cff",
    
    margin: 8,
    padding: 6,
  },
});

export default Subtitle;
