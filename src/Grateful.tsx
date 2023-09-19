import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput} from "react-native";
import Buttons from "./Buttons";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackList } from "../routes/NavigationTypes";


interface GratefulProps{
  navigation : StackNavigationProp<StackList, 'Appr'>;
}


const Grateful: React.FC<GratefulProps> = ({navigation}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [characters, setCharacters] = useState<number>(0);
  
    const handleInputChange = (txt: string) => {
      setInputValue(txt);
      setCharacters(txt.length);
    };
  
    return (
      <View style={styles.container}>
      <Text style={styles.title}>What are you grateful for today?</Text>
      <TextInput
        placeholder="Start writing here..."
        placeholderTextColor={'grey'}
        style={styles.input}
        multiline
        numberOfLines={5}
        maxLength={150}
        onChangeText={handleInputChange}
        blurOnSubmit
        value={inputValue}
      />
      <Text>{characters}/150</Text>
      <Buttons input={inputValue} navigation={navigation} /> 
    </View>
    );
};

export default Grateful;

const styles = StyleSheet.create(
    {
        container :{
            flex : 1,
            backgroundColor : 'white',
            padding : '5%',
            marginTop : '15%'
        },
        title :{
            color: 'black',
            fontSize : 22 ,
            textAlign : 'center',
            fontWeight : '600',
        },
        input : {
            fontSize : 18,
            textAlign : "left",
            padding : '5%',
            marginTop : '20%'
        }
    }
)