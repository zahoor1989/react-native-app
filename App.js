import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [list, setList] = useState([])

  const addGoalsToList = (goal) => {
    setList(currentList => [...currentList,{key:Math.random().toString(), value:goal}])
  }
  const itemRemoveHandler = (key) => {
    setList(currentList => {
      return currentList.filter(goal => goal.key !== key);
    })
  }
return (
<View style={styles.screen}>
  <GoalInput onAddGoal={addGoalsToList} />
<FlatList 
      data={list}
      renderItem={itemData => (<GoalItems id={itemData.item.key} onDelete={itemRemoveHandler} title={itemData.item.value} />)}
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
   }
})
