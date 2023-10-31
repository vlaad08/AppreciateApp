import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import AppreciationScreen from './screens/AppreciationsScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from './screens/SettingsScreen';
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'

type AppNavigatorParamList = {
  'Gratitude Hub': undefined;
  'Gratitude Journal': undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<AppNavigatorParamList>();




Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});



const App: React.FC = () => {

  


  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Gratitude Hub"
      screenOptions={{drawerStyle : {
        backgroundColor:'#fcede7',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }, drawerLabelStyle : {
        fontFamily: 'lato',
        fontSize: 18
      }, drawerActiveTintColor : "black"}}>
        <Drawer.Screen
          name="Gratitude Hub"
          component={MainScreen}
          options={{ headerTitle: '' , headerStyle: {
            backgroundColor: "rgba(252,237,231,255)"
          },
        headerTintColor: "black"}}
        />
        <Drawer.Screen
          name="Gratitude Journal"
          component={AppreciationScreen}
          options={{ headerTitle: '' , headerStyle: {
            backgroundColor: "rgba(252,237,231,255)"
          },
          headerTintColor: "black"
          }}
        />
        <Drawer.Screen name="Settings" component={SettingScreen} 
        options={{ headerTitle: '' , headerStyle: {
          backgroundColor: "rgba(252,237,231,255)"
        },
         headerTintColor: "black"}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};



export default App;







const registerForNotificationsAsync = async () => {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    const dailyNotification = async () => {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'What\'s lighting up your day?',
          body: 'Step in and share the highlights that filled your day with gratitude!',
        },
        trigger: {
          seconds: 5
          },
      });
    };

    dailyNotification();
  } 
};

registerForNotificationsAsync();