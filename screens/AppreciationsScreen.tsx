import React, {useState} from 'react';
import {View, StyleSheet, Text } from 'react-native'
import Appreciations from '../src/Appreciations';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';


interface FormattedData {
  date: Date;
  text: string;
}

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct", "Nov", "Dec"
];

const AppreciationScreen = () => {
    

  const [appreciations, setAppr] = useState<string[]>([]);

  useFocusEffect(
    React.useCallback(() => {
        const getAppreciations = async () => {
            try {
                const keys = await AsyncStorage.getAllKeys();
                const data = await AsyncStorage.multiGet(keys);

                const formattedData: FormattedData[] = data
                    .filter(([_, value]) => value !== null && value !== undefined)
                    .map(([key, value]): FormattedData | null => {
                        try {
                            if (value !== null && value !== undefined) {
                                const parsedValue = JSON.parse(value);
                                if (typeof parsedValue === 'object' && parsedValue.hasOwnProperty('text') && parsedValue.hasOwnProperty('date')) {
                                    return { date: stringToDate(parsedValue.date), text: parsedValue.text };
                                }
                            }
                        } catch (error) {
                            console.error('Error parsing value:', error);
                        }
                        return null;
                    })
                    .filter((item): item is FormattedData => item !== null && item !== undefined)
                    .sort((a, b) => b.date.getTime() - a.date.getTime());

                // Now, transform the formatted data into your desired string format
                const result = formattedData.map(item => `${item.date.getUTCDate()} ${monthNames[item.date.getUTCMonth()]} ${item.date.getUTCFullYear()} ${item.text}`);
                
                return result;
            } catch (error) {
                return [];
            }
        };

        const fetchData = async () => {
            const data = await getAppreciations();
            setAppr(data);
        };

        fetchData();
    }, [])
    );

    if(!appreciations)
    {
        return ( 
        <View style = {{
            flex: 1,
            justifyContent: "center",
            alignContent : "center"
          }}>
              <Text style = {{
                color : 'White'
              }}>Loading...</Text>
            </View>
            );
    }

    return(
      <LinearGradient
        colors={["#1f272f", "black"]}
        style={styles.container}
        >
            <Appreciations appreciations={appreciations}/>
        
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
      }
});

export default AppreciationScreen


function stringToDate(input: string): Date {

  const parts = input.split(' ');

 
  const day = parseInt(parts[0], 10);
  const month = parts[1].toLowerCase();
  const year = parseInt(parts[2], 10);


  const monthMap: { [key: string]: number } = {
    'jan': 0,
    'feb': 1,
    'mar': 2,
    'apr': 3,
    'may': 4,
    'jun': 5,
    'jul': 6,
    'aug': 7,
    'sep': 8,
    'oct': 9,
    'nov': 10,
    'dec': 11
  };
  const newDate = new Date(year, monthMap[month], day+1)
  return newDate;
}
