import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import Quote from "./Quote";



const Line = () => {
  return(
    <View style={styles.line}></View>
  )
}

interface AppreciationsProps{
  appreciations : string[]
}



const Appreciations : React.FC<AppreciationsProps> = ({appreciations}) => {
  return(
    <View style={styles.container}>
      <Quote/>
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