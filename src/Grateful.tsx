import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, TextInput, Keyboard, TouchableWithoutFeedback, Button} from "react-native";
import Buttons from "./Buttons";  
import * as Font from 'expo-font'



interface GratefulProp{
  navigation : any;
}

const Grateful : React.FC<GratefulProp> = ({navigation}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [characters, setCharacters] = useState<number>(0);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'lato': require('../assets/fonts/Lato-Regular.ttf'),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleInputChange = (txt: string) => {
    setInputValue(txt);
    setCharacters(txt.length);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible = {false}>
    <View style={styles.container}>
      <Text style={styles.title}>What's filling your gratitude jar today?</Text>
     
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
              fontFamily: 'lato'
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
        backgroundColor: "#fcede7",
        width: "95%",
        borderRadius: 25,
        marginTop: "4%",
        padding: "5%",
        minHeight: 150,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
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
            color: 'black',
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