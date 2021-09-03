import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [goal, setGoal]= useState('')
  const [list, setList] = useState([])
  const addingStateToGoals = (enteredVal) =>{
    setGoal(enteredVal)
  }
  const addGoalsToList = () => {
    setList(currentList => [...currentList,{key:Math.random().toString(), value:goal}])
  }
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <TextInput placeholder="Enter Course" style={styles.inputContainer} onChangeText={addingStateToGoals} value={goal}/>
        <Button title="ADD" onPress={addGoalsToList}/>
      </View>
      <FlatList 
      data={list}
      renderItem={itemData => (
                              <View style={styles.textDisplay} > 
                                <Text>{itemData.item.value}</Text>
                              </View>)}
      />
        
       
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
   },
   textDisplay:{
     marginVertical:10,
     padding:10,
     borderColor:'grey',
     backgroundColor:'#fff8dc',
     borderWidth:1
   }


})
