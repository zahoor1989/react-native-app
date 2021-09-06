import React, {useState} from 'react';
import { View, Button, TextInput, StyleSheet, Modal} from 'react-native';

const GoalInput = (props) => {
const [goal, setGoal]= useState('')

const addingStateToGoals = (enteredVal) =>{
setGoal(enteredVal)
}
  return (
      <Modal visible={props.open} animationType='slide'>
        <View style={styles.textContainer}>
            <TextInput placeholder="Enter Course" style={styles.inputContainer} onChangeText={addingStateToGoals} value={goal}/>
            <Button title="ADD" onPress={props.onAddGoal.bind(this, goal)}/>
        </View>
      </Modal>
  );
}


const styles = StyleSheet.create({
    textContainer: { 
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:50
     },
     inputContainer:{
       width:'80%',
       padding:5,
       borderWidth:2,
       borderColor:'black'
     }
  })

  export default GoalInput;