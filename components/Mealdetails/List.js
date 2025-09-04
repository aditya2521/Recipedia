import React from "react";
import { StyleSheet, View,Text } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: "#f19d58ff",
  },
  itemText: {
    color: "#995905ff",
    textAlign: "center",
  },
});

export default List;
