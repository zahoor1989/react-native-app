import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer1}>
        <Text>1</Text>
      </View>
      <View style={styles.textContainer2}>
        <Text>2</Text>
      </View>
      <View style={styles.textContainer3}>
        <Text>3</Text>
      </View>
    </View>
  );
};
const textContainer = { flex: 1,alignItems: 'center', justifyContent: 'center' }
const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    width: '100%',
    height: 300,
    flexDirection: 'row'
  },
  textContainer1 : { ...textContainer,backgroundColor:'red'},
  textContainer2: {
    ...textContainer,
    backgroundColor:'green'
  },
  textContainer3 :{
    ...textContainer,
    backgroundColor:'purple'
  }

})
