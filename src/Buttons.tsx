import { View, TouchableOpacity, Text, StyleSheet, Keyboard, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Alert } from "react-native";
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct", "Nov", "Dec"
];



const saveAppreciation = async (appreciation: string) => {
  try {
    const currentDate = new Date();
    const dateString = currentDate.getUTCDate() + " " + monthNames[currentDate.getUTCMonth()] + " " + currentDate.getUTCFullYear(); 
    const dataToSave = { date: dateString, text: appreciation };
    await AsyncStorage.setItem(dateString, JSON.stringify(dataToSave));
    console.log('Data saved successfully.');
    
  } catch (error) {
    console.error('Error saving data: ', error);
    
  }
};

interface ButtonsProps {
    input: string;
    handleInput: (txt : string) => void;
  }


const nothingAlert = ({}) =>{
  Alert.alert("", "Don't worry, you can always come back later, until then, here's all the days you were grateful",
  [
    {
      text: "OK",
    },
    {
      text: "Wait I have something"
    }
  ])
}

const Buttons: React.FC<ButtonsProps> = ({ input, handleInput }) => {
  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => { saveAppreciation(input); Keyboard.dismiss(); handleInput("")}}>
            <View style={styles.btn1Container}>
              <Text style={styles.btn1}>I'm grateful for this</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}> 
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
      flex: 1,
      alignSelf: 'center'
    },
    btnContainer: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },

    btn1Container : {
      borderRadius: 25,
      backgroundColor: '#8558BE',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14
    },
    btn2Container : {
      marginTop: "2%",
      borderRadius: 25,
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: "#8558BE",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14,
      },
    btn1: {
      color: 'white',
      fontSize: 18,
      fontWeight: '700',
      textAlign: 'center',
 
      padding: '3%',
      height: 'auto',
      width: 300,
      overflow: 'hidden',
      
    },
    btn2: {
      marginTop: '2%',
      color: '#8558BE',
      textAlign: 'center',
      padding: '2%',
      height: 'auto',
      width: 200,
      fontWeight: '400'
    }
  }
)
