import React from 'react';
import { StyleSheet, View } from 'react-native';
import Gratitude from './src/Gratitude';




export default function App() {
  return (
    <View style={styles.container}>
      <Gratitude />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});
