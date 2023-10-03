import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import AppreciationScreen from './screens/AppreciationsScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from './screens/SettingsScreen';



const App = () => {
  const Drawer = createDrawerNavigator();



  const AppNavigator = () => {
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainScreen} options={{headerTitle : ""}} />
        <Drawer.Screen name="My Appreciations" component={AppreciationScreen}
        options={{headerStyle : {
          backgroundColor: '#C5B1EC',

        }}}
/>
        <Drawer.Screen name="Settings" component={SettingScreen}/>
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
