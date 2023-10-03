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
    return [];
  }
};

const Line = () => {
  return(
    <View style={styles.line}></View>
  )
}


const AppreciationsList = () => {
  const [appreciations, setAppr] = useState<string[]>([]);

    useEffect(() => {
    const fetchData = async () => {
      const data = await getAppreciations();
      const filteredData = data.filter(item => item !== null) as string[];
      setAppr(filteredData);
    };

    fetchData();
  }, [])

  return (
    <FlatList
        ItemSeparatorComponent={Line}
        contentContainerStyle = {styles.apprList}
        data = {appreciations}
        renderItem={({item}) => {
          if (item) {
            const fullText = item.split(" ");
            
            const date = fullText[0] + "\n" + fullText[1] + "\n" + fullText[2];

            const text = () =>{
              let value = "";
              for(let i = 3; i < fullText.length; i++)
              {
                value += fullText[i] + " " ;
              }
              return value;
            }

              return (
                <View style={styles.apprContainer}>
                  <Text style={styles.apprDate}>{date}</Text>
                  <Text style={styles.apprText}>{text()}</Text>
                </View>
              );
          }
          return null;
        }
        }
        />
  )
}


const Appreciations = () => {
  return(
    <View style={styles.container}>
      <Quote/>
      <AppreciationsList/>
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
  apprText : {
    fontSize: 17,
    marginLeft: "auto",
    marginRight: "auto",
    width: "75%"
  },
  apprDate : {
    width: "20%",
    textAlign: "center",
    backgroundColor: "#8558BE",
    padding: "2%",
    color: "white",
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14,
  },
  apprContainer : {
    padding: 10,
    flex: 1,
    flexDirection : "row"
  },
  apprList : {
    justifyContent: "flex-start",
    rowGap: 20,
    flexGrow: 1,
    height: "auto"
  }
})