import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';







const SettingScreen = () =>{
    return (
        <View>
            <TouchableOpacity onPress={() => AsyncStorage.clear()}>
                 <Text>Clear appreciations</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingScreen;