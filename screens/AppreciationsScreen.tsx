import React, {useState} from 'react';
import {View, StyleSheet } from 'react-native'
import Appreciations from '../src/Appreciations';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




const AppreciationScreen = () => {
    
    const [appreciations, setAppr] = useState<string[]>([]);

    useFocusEffect(
        React.useCallback(() => {
            const getAppreciations = async () => {
                try {
                  const keys = await AsyncStorage.getAllKeys();
                  const data = await AsyncStorage.multiGet(keys);
              
                  const formattedData = data
                    .filter(([_, value]) => value !== null)
                    .map(([key, value]) => {
                      try {
                        if (value !== null) {
                          const parsedValue = JSON.parse(value);
                          if (typeof parsedValue === 'object' && parsedValue.hasOwnProperty('text')&& parsedValue.hasOwnProperty('date')) {
                      
                            return parsedValue.date + " " + parsedValue.text; 
                          }
                        }
                      } catch (error) {
                        return null; 
                      }
                    })
                    .filter((parsedValue) => parsedValue !== null);
              
                  return formattedData;
                } catch (error) {
                  return [];
                }
              };

             
                const fetchData = async () => {
                  const data = await getAppreciations();
                  const filteredData = data.filter(item => item !== null) as string[];
                  setAppr(filteredData.reverse());
                };
            
                fetchData();

                
        }, [])
    );


    return(
        <View style={styles.container}>
            <Appreciations appreciations={appreciations}/>
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