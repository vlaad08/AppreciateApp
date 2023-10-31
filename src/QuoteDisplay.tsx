import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import jsonData from '../assets/quotes.json';


interface State {
    randomQuote: { quote: string; author: string };
  }
  
  class QuoteDisplay extends Component<{}, State> {

    
    constructor(props: {}) {
      super(props);
      this.state = {
        randomQuote: { quote: '', author: '' },
      };
    }
  
    componentDidMount() {
      const { quotes } = jsonData;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      this.setState({ randomQuote });
    }
  
    render() {
      const { randomQuote } = this.state;
  
    
      if(randomQuote.author === "")
      return (
        <View style={styles.container}>
          <Text style={styles.quote}>"{randomQuote.quote}"</Text>
        </View>
      );
      else
        return(
        <View style={styles.container}>
            <Text style={styles.quote}>"{randomQuote.quote}"</Text>
            <Text style={styles.author}>- {randomQuote.author}</Text>
        </View>
    )
    }
  }
  
  export default QuoteDisplay;


  const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: "5%",
        justifyContent: 'space-around'
    },
    quote :{
        fontSize: 20,
        color: 'black',
        fontFamily: 'lato'
    },
    author : {
        fontSize: 16,
        color: 'black',
        fontFamily: 'lato'
    }
  })