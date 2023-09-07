import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native'


const getAppreciations = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const data = await AsyncStorage.multiGet(keys);
  
      
      const formattedData = data
        .filter(([_, value]) => value !== null) 
        .map(([key, value]) => {
          try {
            if(value != null)
            {
              return JSON.parse(value);
            }
          } catch (error) {
            return []; 
          }
        })
        .filter((parsedValue) => parsedValue !== null); 
        
        const appr : string[] = []

        formattedData.forEach(value => {
            appr.push(value);
        })

        return appr;

    } catch (error) {
      console.error('Error fetching data: ', error);
      return [];
    }
  };


const Appreciations = () => {
    const [appreciations, setAppr] = useState<string[]>([]);

    useEffect(() => {
    const fetchData = async () => {
      const data = await getAppreciations();
      setAppr(data);
    };

    fetchData();
  }, [])

    return(
        <FlatList
        data = {appreciations}
        renderItem={({item}) => <Text>{item}</Text>}
        />
    )
}


export default Appreciations;