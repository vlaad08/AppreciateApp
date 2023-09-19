import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import AppreciationScreen from './screens/AppreciationsScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';



const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const MainStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name='Main' component={MainScreen} options={{headerShown : false}}></Stack.Screen>
        <Stack.Screen name='Appr' component={AppreciationScreen} options={{title: ""}}></Stack.Screen>
      </Stack.Navigator>
    )
  }

  const AppNavigator = () => {
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainStack} options={{headerTitle : ""}} />
        <Drawer.Screen name="My Appreciations" component={AppreciationScreen}/>
      </Drawer.Navigator>
    )
  }


  return(
    <NavigationContainer>
      <AppNavigator></AppNavigator>
    </NavigationContainer>
  )
}


export default App;
