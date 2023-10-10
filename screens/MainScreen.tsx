import { StyleSheet, View } from "react-native";
import React from 'react'
import Grateful from "../src/Grateful";
import { DrawerNavigationProp } from "@react-navigation/drawer";


type AppNavigatorParamList = {
  Home: undefined;
  'My Appreciations': undefined;
  Settings: undefined;
};
type MainScreenNavigationProp = DrawerNavigationProp<AppNavigatorParamList, 'Home'>;


const MainScreen: React.FC<{ navigation: MainScreenNavigationProp }>= ({navigation}) =>{
    return (
        <View style={styles.container}>
          <Grateful navigation={navigation}/>
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
  