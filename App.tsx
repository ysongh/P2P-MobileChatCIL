import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
 
function App(){
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.text}>My Video Conferencing App</Text>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#222222',
    height: '100%',
    width: '100%',
  },
  text: {
    color: '#ffffff',
  },
});
 
export default App;