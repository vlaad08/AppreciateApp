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
            if (typeof parsedValue === 'object' && parsedValue.hasOwnProperty('text')) {
              return parsedValue.text; 
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
      setAppr(data);
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
        renderItem={({item}) => 
          <View style= {styles.apprContainer}>
            <Text style = {styles.appr}>{item}</Text>
          </View>
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
    fontSize: 16,
    marginTop: 5,
    padding: 15,
    minWidth : "85%",
    maxWidth : "85%",
    height: "auto",
    
  },
  apprContainer : {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#8558BE",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  apprList : {
    flex : 1,
    justifyContent : "flex-start",
    alignItems : "center",
    marginTop : 50,
    rowGap: 40,
  }
})