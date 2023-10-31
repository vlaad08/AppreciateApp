import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
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

const inBuildingAlert = () => {
    Alert.alert('Currently not available', 'The website is currently being made', [
        {
            text: 'Ok',
        }
    ],
    {
        cancelable : true
    })
}



const SettingScreen = () =>{
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => deleteAlert()} style={styles.btnContainer}>
                 <Text style={styles.btnText}>Clear appreciations</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => inBuildingAlert()} style={styles.btnContainer}>
                <Text style={styles.btnText}>Feedback and Support</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'rgba(252,237,231,255)',
        padding: '5%',

    },
    btnContainer : {
        padding: '5%',
        borderBottomWidth : 0.5,
        borderBottomColor: "gray",
        marginBottom: "5%",
        display: "flex",
        alignContent: "flex-start",
        justifyContent: "center"
    },
    btnText : {
        fontSize: 20,
    }
})
export default SettingScreen;