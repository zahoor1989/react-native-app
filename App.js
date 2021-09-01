import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
return (
    <View style={{padding:50}}>
    <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
      <TextInput placeholder="Enter the values" style={{width:'80%',borderWidth:1,height:40, padding:10}}/>
      <Button title="Add Task" style={{fontSize: 20, color: 'green'}}/>
    </View>
    </View>
  );
}
