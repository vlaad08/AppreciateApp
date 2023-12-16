import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
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

        <LinearGradient
        colors={["#1f272f", "black"]}
        style={styles.container}>
            <TouchableOpacity onPress={() => deleteAlert()} style={styles.btnContainer}>
                 <Text style={styles.btnText}>Clear appreciations</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => inBuildingAlert()} style={styles.btnContainer}>
                <Text style={styles.btnText}>Feedback and Support</Text>
            </TouchableOpacity>

            <View style={styles.futureBox}>
                <Text style={styles.futureText}>Exciting new features coming soon</Text> 
            </View>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#1f272f',
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
        color: 'white'
    },
    futureBox : {
        flex : 2,
        justifyContent: "center",
        alignItems: "center"
    },
    futureText : {
        color : 'white',
        fontSize : 20,
        borderWidth: 0.5,
        borderColor: "white",
        borderStyle : "solid",
        padding: "5%",
        width: "50%",
        textAlign: "center"
    }
})
export default SettingScreen;