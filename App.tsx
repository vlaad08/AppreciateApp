import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import AppreciationScreen from './screens/AppreciationsScreen';



const App = () => {

  const Stack = createNativeStackNavigator();


  return(
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Appr' component={AppreciationScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
