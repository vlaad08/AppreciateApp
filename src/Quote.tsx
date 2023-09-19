import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import  jsonData from '../assets/quotes.json'; 
import QuoteDisplay from './QuoteDisplay';



const Quote  = () => {
    
   

    return (
        <View style={styles.container}>
            <QuoteDisplay/>
        </View>
    );
}


const styles = StyleSheet.create({
    container : {
        width: '100%',
        height: 200,
        backgroundColor: '#C5B1EC',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14
    }
})

export default Quote;