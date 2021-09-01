import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
return (
    <View  style={{paddingTop:50,width:'100%',height:300,flexDirection:'row'}}>
    <View  style={{flex:1,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
      <Text>1</Text>
    </View>
    <View  style={{flex:1, backgroundColor: 'blue',justifyContent:'center',alignItems:'center'}}>
      <Text>2</Text>
    </View>
    <View  style={{flex:1, backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
      <Text>3</Text>
    </View>
    </View>
  );
}
