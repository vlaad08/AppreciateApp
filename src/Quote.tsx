import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as fs from 'fs';




const getQuote = () : string => {
    fs.readFile("../assets/quotes.json", 'utf8', (err, data) => {
        if (err) {
          return "";
        }
        try {
          const jsonData = JSON.parse(data);
          console.log(jsonData);
        } catch (parseError) {
            console.log("eroara pula")
        }
      });
    return "caca"
}


const Quote  = () => {
    return (
        <View style={styles.container}>
            <Text>{getQuote()}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container : {
        width: '100%',
        height: 200,
        backgroundColor: '#C5B1EC'
    }
})

export default Quote;