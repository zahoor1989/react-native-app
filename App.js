import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';
import Universities from './components/Universities';

export default function App() {
  const [list, setList] = useState([])
 const [isOpen, setIsOpen] = useState(false)

  const addGoalsToList = (goal) => {
    setList(currentList => [...currentList,{key:Math.random().toString(), value:goal}])
    setIsOpen(false)
  }
  const itemRemoveHandler = (key) => {
    setList(currentList => {
      return currentList.filter(goal => goal.key !== key);
    })
  }
  const openModal = () => {
    setIsOpen(true)
  }
return (
<View style={styles.screen}>
<GoalInput onAddGoal={addGoalsToList} open={isOpen} />
<Button onPress={()=> openModal()} title="Add List"/>
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
  }
})
