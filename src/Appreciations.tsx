import React, { useEffect, useState } from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import Quote from "./Quote";


interface AppreciationsProps{
  appreciations : string[]
}



const Appreciations : React.FC<AppreciationsProps> = ({appreciations}) => {


 
  return(
    <View style={styles.container}>
      <Quote/>
      <FlatList
        contentContainerStyle = {styles.apprList}
        data = {appreciations}
        renderItem={({item}) => {
          if (item) {
            const fullText = item.split(" ");
            const date = fullText[0] + " "  + fullText[1] + " " + fullText[2];

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
                  <View style={{
                  borderBottomWidth: 0.5,
                  borderStyle: 'solid',
                  borderBottomColor: "gray"
                  }}>
                    <Text style={styles.apprDate}>{date}</Text>
                  </View>
                  <Text style={styles.apprText}>{text()}</Text>
                </View>
              );
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
    height: '100%',
  },
  line : {
    width: "100%",
    height: 1,
    backgroundColor: "gray"
  },
  apprText : {
    fontSize: 17,
    fontFamily: 'lato',
    alignSelf: 'center',
    padding: "2%"
  },
  apprDate : {
    fontFamily: 'lato',
    textAlign: "center",
    color: "black",
    justifyContent: 'center',
    alignSelf: 'center',
    padding:'3%'
  },
  apprContainer : {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 10,
    shadowColor: "#000",
      shadowOffset: { 
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14,
    backgroundColor: "rgba(252,237,231,255)",
    minWidth: "80%",
    maxWidth: "80.1%"
    
  },
  apprList : {
    alignItems: "center",
    rowGap: 15,
    width: "100%",
    flexGrow: 1
  }
})