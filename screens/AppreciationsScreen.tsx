import React from 'react';
import {View, StyleSheet } from 'react-native'
import Appreciations from '../src/Appreciations';


const AppreciationScreen = () => {
    return(
        <View style={styles.container}>
            <Appreciations></Appreciations>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
      }
});

export default AppreciationScreen