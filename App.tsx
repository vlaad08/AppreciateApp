import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import AppreciationScreen from './screens/AppreciationsScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from './screens/SettingsScreen';



type AppNavigatorParamList = {
  Home: undefined;
  'My Appreciations': undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<AppNavigatorParamList>();


const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={MainScreen}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="My Appreciations"
          component={AppreciationScreen}
          options={{
            headerStyle: {
              backgroundColor: '#C5B1EC',
            },
          }}
        />
        <Drawer.Screen name="Settings" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;