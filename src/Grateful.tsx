import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, Keyboard, TouchableWithoutFeedback} from "react-native";
import Buttons from "./Buttons";  

const Grateful = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [characters, setCharacters] = useState<number>(0);

  const handleInputChange = (txt: string) => {
    setInputValue(txt);
    setCharacters(txt.length);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>What are you grateful for today?</Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible = {false}>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Start writing here..."
        placeholderTextColor={'grey'}
        style={styles.input}
        multiline
        numberOfLines={5}
        maxLength={150}
        onChangeText={handleInputChange}
        value={inputValue}
      />
      <Text style={{
        alignSelf: 'flex-start',
        marginTop: "2%"
      }}>{characters}/150</Text>     
      <Buttons input={inputValue} handleInput={handleInputChange} />
      </View>
      </TouchableWithoutFeedback>
    </View>
  );
};


export default Grateful;

const styles = StyleSheet.create(
    {
        container :{
          flex : 1,
          backgroundColor : 'white',
          justifyContent:'center', 
          alignItems: 'flex-start',
          padding: "5%",
          marginTop: "2%"
        },
        title :{
            color: 'black',
            fontSize : 22 ,
            fontWeight : '600',
            alignSelf: 'center'
        },
        input : {
            fontSize : 18,
            alignSelf: 'flex-start',
            marginTop: "3%",
            borderWidth: 2,
            
        },
        inputContainer :{
          flex: 2, 
          alignItems: 'center'
        }
    }
)