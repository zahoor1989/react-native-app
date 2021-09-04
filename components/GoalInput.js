import React, {useState} from 'react';
import { View, Button, TextInput, StyleSheet} from 'react-native';

const GoalInput = (props) => {
const [goal, setGoal]= useState('')

  const addingStateToGoals = (enteredVal) =>{
    setGoal(enteredVal)
  }
  return (
      <View style={styles.textContainer}>
        <TextInput placeholder="Enter Course" style={styles.inputContainer} onChangeText={addingStateToGoals} value={goal}/>
        <Button title="ADD" onPress={props.onAddGoal.bind(this, goal)}/>
      </View>
  );
}


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

  export default GoalInput;