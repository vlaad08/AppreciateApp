import React from 'react';
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
      <Drawer.Navigator initialRouteName="Gratitude Hub">
        <Drawer.Screen
          name="Gratitude Hub"
          component={MainScreen}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="Gratitude Journal"
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







const registerForNotificationsAsync = async () => {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    const dailyNotification = async () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(20, 0, 0, 0); 
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'What\'s lighting up your gratitude radar today?',
          body: 'Step in and share the highlights that filled your day with gratitude!',
        },
        trigger: {
          date : tomorrow
        },
      });
    };

    dailyNotification();
  } 
};

registerForNotificationsAsync();