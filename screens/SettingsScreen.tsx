import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const deleteAlert = () => {
    Alert.alert('Clear Appreciations List', 'Are you sure you want to clear the whole list? You wont\'t be able to get them back ', [    
        {
            text : 'Yes, I\'m sure',
            onPress : () => AsyncStorage.clear()
        },
        {
            text : 'No, I don\'t want to clear it',
            style : 'cancel'
        }
    ],
    {
        cancelable : true
    }
    )
}



const SettingScreen = () =>{
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer}>
                <Text>Privacy Lock</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <Text>Export List as PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnContainer}>
                <Text>Feedback and Support</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteAlert()} style={styles.btnContainer}>
                 <Text>Clear appreciations</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
        padding: '5%',

    },
    btnContainer : {
        padding: '2%'
    }
})
export default SettingScreen;