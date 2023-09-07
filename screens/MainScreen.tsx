import { StyleSheet, View } from "react-native";
import Gratitude from "../src/Gratitude";
import React from 'react'





const MainScreen = () =>{
    return (
        <View style={styles.container}>
          <Gratitude />
        </View>
      );
}


export default MainScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
      flex: 1,
    },
  });
  