import { View, TouchableOpacity, Text, StyleSheet, Keyboard, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from "expo-linear-gradient";



const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct", "Nov", "Dec"
];


const saveAppreciation = async (appreciation: string) => {
  if(appreciation.length != 0)
  {
    try {
      const currentDate = new Date();
      const dateString = currentDate.getUTCDate() + " " + monthNames[currentDate.getUTCMonth()] + " " + currentDate.getUTCFullYear();
      const dataToSave = { date: dateString, text: appreciation };
      await AsyncStorage.setItem(dateString, JSON.stringify(dataToSave));
    } catch (error) {
      console.error('Error saving data: ', error);
    }
  }
  else
  {
    emptyField();
  }
}

interface ButtonsProps {
    input: string;
    handleInput: (txt : string) => void;
    navigation : any;
  }


const nothingAlert = () =>{
  Alert.alert("Nothing for today?", "No rush! Feel free to return at your own pace. In the meantime, take a stroll down memory lane and revisit your earlier thoughts.",
  [
    {
      text: "OK"
    }
  ])
}

const emptyField = () => {
  Alert.alert("Oops, you can't do that", "Please fill out the field!", [
    {
      text: "Ok"
    }
  ])
}

const Buttons: React.FC<ButtonsProps> = ({ input, handleInput, navigation}) => {
 

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => { saveAppreciation(input); Keyboard.dismiss(); handleInput(""); navigation.navigate('Gratitude Journal')}}
            style={{overflow: "visible"}}
            >
              <View style={[[styles.btn1Container, styles.shadow]]}>
                <Text style={styles.btn1}>Capture My Gratitude!</Text>
              </View>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => {nothingAlert(); navigation.navigate('Gratitude Journal')}}> 
            <View style = {styles.btn2Container}>
              <Text style={styles.btn2}>I have nothing for today</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Buttons;

const styles = StyleSheet.create(
  {
    container: {
      flex: 1
    },
    btnContainer: {
      flex: 2,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: "5%"
    },
    btn1Container : {
      borderRadius: 25,
    },
    shadow:{
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 7 },
          shadowOpacity: 0.8,
          shadowRadius: 9,
          backgroundColor: "white"
        },
        android: {
          elevation: 14,
        },
      }),
    },
    btn2Container : {
      marginTop: "3%",
      borderRadius: 25,
      backgroundColor: 'white'
      },
    btn1: {
      color: 'black',
      fontSize: 20,
      textAlign: 'center',
      padding: '3%',
      height: 'auto',
      width: 300,
      fontFamily: 'lato'
    },
    btn2: {
      marginTop: '2%',
      color: 'black',
      textAlign: 'center',
      padding: '2%',
      height: 'auto',
      width: 200,
      fontFamily: 'lato',
      fontSize: 16
    }
  }
)
