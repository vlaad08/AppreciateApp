import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, TextInput, Keyboard, TouchableWithoutFeedback, Button} from "react-native";
import Buttons from "./Buttons"; 



interface GratefulProp{
  navigation : any;
}

const Grateful : React.FC<GratefulProp> = ({navigation}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [characters, setCharacters] = useState<number>(0);
  

  const handleInputChange = (txt: string) => {
    setInputValue(txt);
    setCharacters(txt.length);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible = {false}>
    <View style={styles.container}>
      <Text style={styles.title}>Reflect on today's highlight...</Text>
     
        <View style={styles.inputContainer}>
          <View style={styles.inputBK}>
            <TextInput
              placeholder="Start writing here..."
              placeholderTextColor={'grey'}
              style={styles.input}
              multiline
              numberOfLines={5}
              maxLength={150}
              onChangeText={handleInputChange}
              value={inputValue}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={true}
            />
          </View>
          <Text style={{
              alignSelf: 'flex-start',
              marginTop: "2%",
              fontFamily: 'lato',
              color: 'white'
            }}>{characters}/150</Text>
          <Buttons input={inputValue} handleInput={handleInputChange} navigation={navigation}/>
        </View>
    </View>
    </TouchableWithoutFeedback>
  );
};


export default Grateful;

const styles = StyleSheet.create(
    {
      inputBK :{
        backgroundColor: "white",
        width: "95%",
        borderRadius: 25,
        marginTop: "4%",
        padding: "5%",
        minHeight: 150,
        shadowColor: "white",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,

        elevation: 16,
      },
        container :{
          flex : 1,
          justifyContent:'center', 
          alignItems: 'flex-start',
          padding: "5%",
          marginTop: "2%",
          height: 'auto',
          width: '100%',
        },
        title :{
            color: 'white',
            fontSize : 22 ,
            fontWeight : '600',
            alignSelf: 'center',
            textAlign: 'center',
            fontFamily: 'lato'
        },
        input : {
            fontSize : 18,
            fontFamily: 'lato',
            display: "flex"

        },
        inputContainer :{
          flex: 2, 
          alignItems: 'center',
          width: '100%'
        }
    }
)