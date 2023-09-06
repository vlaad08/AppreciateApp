import { View, TouchableOpacity, Text, StyleSheet, Keyboard, Platform, KeyboardAvoidingView, TouchableWithoutFeedback} from "react-native";
import React, { useState }  from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



interface ButtonsProps {
    input: string;
  }





  const saveAppreciation = async (appreciation : string) => {
    try {
      const currentDate = new Date();
      const dateString = currentDate.toISOString().split('T')[0]; // Get YYYY-MM-DD format
      const dataToSave = { date: dateString, text: appreciation };
      await AsyncStorage.setItem(dateString, JSON.stringify(dataToSave));
      console.log('Data saved successfully.');
    } catch (error) {
      console.error('Error saving data: ', error);
  }};
  
  const getAppreciations = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const data = await AsyncStorage.multiGet(keys);
  
      // Process and display the data as needed
      const formattedData = data
        .filter(([_, value]) => value !== null) // Filter out null values
        .map(([key, value]) => {
          try {
            if(value != null)
            {
              return JSON.parse(value);
            }
          } catch (error) {
            console.error(`Error parsing JSON for key "${key}":`, error);
            return null; // Handle parsing error by returning null
          }
        })
        .filter((parsedValue) => parsedValue !== null); // Remove parsed values that resulted in parsing errors
      console.log('Fetched data: ', formattedData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };


const Buttons: React.FC<ButtonsProps> = ({ input }) => {
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => {saveAppreciation(input)}}>
                    <Text style = {styles.btn1}>I'm grateful for this</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {getAppreciations()}}>
                    <Text style = {styles.btn2}>I have nothing for today</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    )
}

export default Buttons;

const styles = StyleSheet.create(
    {
        container : {
            flex: 3
        },
        btnContainer : {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        btn1 : {
            backgroundColor : '#8558BE',
            color : 'white',
            fontSize: 18,
            fontWeight : '700',
            textAlign: 'center',
            borderRadius: 25,
            padding: '3%',
            height: 'auto',
            width: 300,
            overflow: 'hidden'
        },
        btn2 : {
            marginTop: '2%',
            backgroundColor : 'white',
            color : '#8558BE',
            borderRadius: 20,
            textAlign : 'center',
            padding: '2%',
            height: 'auto',
            width: 200,
            fontWeight: '400',
            borderWidth: 2,
            borderColor: "#8558BE"

        }
    }
)