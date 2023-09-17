import { Button, StyleSheet, View } from "react-native";
import React from 'react'
import { StackNavigationProp } from "@react-navigation/stack";
import { StackList } from "../routes/NavigationTypes";
import Grateful from "../src/Grateful";

type ScreenProps = {
  navigation: StackNavigationProp<StackList, 'Appr'>;
};



const MainScreen : React.FC<ScreenProps> = ({navigation}) =>{
    return (
        <View style={styles.container}>
          <Grateful navigation={navigation} />
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
  