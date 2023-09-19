import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState, useEffect} from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import Quote from "./Quote";


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
    console.error('Error fetching data: ', error);
    return [];
  }
};

const Line = () => {
  return(
    <View style={styles.line}></View>
  )
}


const Appreciations = () => {
    const [appreciations, setAppr] = useState<string[]>([]);

    useEffect(() => {
    const fetchData = async () => {
      const data = await getAppreciations();
      const filteredData = data.filter(item => item !== null) as string[];
      setAppr(filteredData);
    };

    fetchData();
  }, [])


  return(
    <View style={styles.container}>
      <Quote/>
      <FlatList
        ItemSeparatorComponent={Line}
        contentContainerStyle = {styles.apprList}
        data = {appreciations}
        renderItem={({item}) => {
          
          // <View style= {styles.apprContainer}>
          //   <Text style = {styles.appr}>{item}</Text>
          // </View>

          if (item) {
            const parts = item.split(' ');
      
            if (parts.length >= 2) {
              const date = parts.shift(); 
              const text = parts.join(' '); 
      
              return (
                <View style={styles.apprContainer}>
                  <Text style={styles.appr}>{date}</Text>
                  <Text style={styles.appr}>{text}</Text>
                </View>
              );
            }
          }
          return null;
        }
        }
        />
    </View>
    )
}



export default Appreciations;




const styles = StyleSheet.create({
  container : {
    width: '100%',
    height: '100%'
  },
  line : {
    width: "100%",
    height: 1,
    backgroundColor: "black"
  },
  appr : {
    fontSize: 17,
    minWidth : "85%",
    maxWidth : "85%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto"
  },
  apprContainer : {
    padding: 10
  },
  apprList : {
    flex : 1,
    marginTop : 50,
    justifyContent: "flex-start",
    rowGap: 20
  }
})