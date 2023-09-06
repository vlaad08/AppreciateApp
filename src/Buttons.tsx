import { View, TouchableOpacity, Text, StyleSheet, Keyboard, Platform, KeyboardAvoidingView, TouchableWithoutFeedback} from "react-native";
import React, { useState }  from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



interface ButtonsProps {
    input: string;
  }


  const data : string[] = [];




  const saveAppreciation = async (appreciation : string) => {
    try {
      data.push(appreciation)
      await AsyncStorage.setItem('@appreciations',JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  
  const getData = async () => {
    try {
      const data = AsyncStorage.getItem('@appreciations').then((result) => {
        if (result) {
          const storedData : string[] = JSON.parse(result);

          storedData.forEach(appreciation => console.log(appreciation))

        } else {
          console.log('No data found for the key:', data);
        }
      })
      .catch((error) => {
        console.error('Error retrieving data:', error);
      });;

    } catch (e) {
      // error reading value
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
                <TouchableOpacity onPress={() => {getData()}}>
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