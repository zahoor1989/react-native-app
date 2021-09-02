import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <TextInput placeholder="Enter Course" style={styles.inputContainer}/>
        <Button title="ADD"/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    paddingTop:50,
    paddingRight:20,
    paddingLeft:20,
    paddingBottom:20
  },
  textContainer: { 
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
   },
   inputContainer:{
     width:'80%',
     padding:5,
     borderWidth:2,
     borderColor:'black'
   }


})
