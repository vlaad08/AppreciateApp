import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import AppreciationScreen from './screens/AppreciationsScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from './screens/SettingsScreen';
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import * as Font from 'expo-font'

type AppNavigatorParamList = {
  'Gratitude Hub': undefined;
  'Gratitude Journal': undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<AppNavigatorParamList>();


/* 
- add multiple languages
- be able to delete desired appr
- when pressed on nothing for today, give some ideas for the user of what to do so he can feel better
- make a small tutorial
- the culors are giving girly vibes which migth not be attractive for boys and men
- able to insert images
*/

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});



const App: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'lato': require('./assets/fonts/Lato-Regular.ttf'),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <View style = {{
      flex: 1,
      justifyContent: "center",
      alignContent : "center"
    }}>
        <Text style = {{
          color : 'White',
          fontSize: 20,
          padding: "3%",
          borderStyle: "solid",
          borderColor: "white",
          borderWidth: 0.5
        }}>Loading...</Text>
  </View>
  }
  


  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Gratitude Hub"
      screenOptions={{drawerStyle : {
        backgroundColor:'#1f272f',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        borderTopWidth : 0,
        shadowOpacity : 0
      }, drawerLabelStyle : {
        fontFamily: 'lato',
        fontSize: 18,
        color: "white"
      }, drawerActiveTintColor : "black"}}>
        <Drawer.Screen
          name="Gratitude Hub"
          component={MainScreen}
          options={{ headerTitle: '' , headerStyle: {
            backgroundColor: "#1f272f",
            borderStartWidth : 0
          },
        headerTintColor: "white"}}
        />
        <Drawer.Screen
          name="Gratitude Journal"
          component={AppreciationScreen}
          options={{ headerTitle: '' , headerStyle: {
            backgroundColor: "#1f272f",
          },
          headerTintColor: "white"
          }}
        />
        <Drawer.Screen name="Settings" component={SettingScreen} 
        options={{ headerTitle: '' , headerStyle: {
          backgroundColor: "#1f272f"
        },
         headerTintColor: "white"}}
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
          hour: 20,
          minute: 0,
          repeats: true
        }
      });
    };

    dailyNotification();
  } 
};


registerForNotificationsAsync();