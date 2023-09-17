import { Button, StyleSheet, View } from "react-native";
import Gratitude from "../src/Gratitude";
import React from 'react'
import { StackNavigationProp } from "@react-navigation/stack";
import { StackList } from "../routes/NavigationTypes";

type ScreenProps = {
  navigation: StackNavigationProp<StackList, 'Main'>;
};



const MainScreen : React.FC<ScreenProps> = ({navigation}) =>{
    return (
        <View style={styles.container}>
          <Gratitude />
          <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Appr')}
      />
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
  