import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import AppreciationScreen from './screens/AppreciationsScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from './screens/SettingsScreen';
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import { Platform } from 'react-native';

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


// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });







async function registerForNotificationsAsync() {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    else
    {
      // const dailyNotification = async () => {
      //   const now = new Date();
      //   const tomorrow = new Date(now);
      //   tomorrow.setDate(tomorrow.getDate() + 1);
      //   tomorrow.setHours(20, 0, 0, 0); 
      //   await Notifications.scheduleNotificationAsync({
      //     content: {
      //       title: 'What are you grateful for today?',
      //       body: 'Come in and log what made you grateful for today!',
      //     },
      //     trigger: {
      //       seconds: 5
      //     }
      //   });

      // };
      // dailyNotification();
    }
  } 
}

registerForNotificationsAsync();