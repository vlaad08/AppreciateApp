import { StyleSheet, View} from "react-native";
import React from 'react'
import Grateful from "../src/Grateful";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";


type AppNavigatorParamList = {
  Home: undefined;
  'My Appreciations': undefined;
  Settings: undefined;
};
type MainScreenNavigationProp = DrawerNavigationProp<AppNavigatorParamList, 'Home'>;




const MainScreen: React.FC<{ navigation: MainScreenNavigationProp,  }>= ({navigation}) =>{
    return (
        
        <LinearGradient
        colors={["#1f272f", "black"]}
        style={styles.container}>
          <Grateful navigation={navigation}/>
        </LinearGradient>
      );
}


export default MainScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });
  