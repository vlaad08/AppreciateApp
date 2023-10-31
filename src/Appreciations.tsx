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
                  <Text style={styles.apprDate}>{date}</Text>
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
    width: "80%",
    fontFamily: 'lato',
    backgroundColor: "rgba(252,237,231,255)",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: "2%",
    paddingBottom: "5%",
    overflow: 'hidden',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  apprDate : {
    fontFamily: 'lato',
    width: "80%",
    textAlign: "center",
    backgroundColor: "rgba(252,237,231,255)",
    color: "black",
    
      justifyContent: 'center',
      alignSelf: 'center',
      padding:'3%',
      borderBottomColor: "gray",
      borderBottomWidth: 0.5
  },
  apprContainer : {
    padding: 10,
    flex: 1,
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
    justifyContent: "flex-start",
    rowGap: 10,
    flexGrow: 1,
    height: "auto"
  }
})