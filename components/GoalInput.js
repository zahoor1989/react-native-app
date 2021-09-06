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
            <View style={styles.btnContainer}>
                <View style={styles.btnWidth}>
                <Button title="ADD" onPress={props.onAddGoal.bind(this, goal)}/>
                </View>
                <View style={styles.btnWidth}>
                <Button title="CANCEL" onPress={props.onCancel} color="red"/>
                </View>
            </View>
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
     },
     btnContainer:{
         marginTop:5,
         flexDirection:'row',
         width:'80%',
         justifyContent:'space-evenly',
     },
     btnWidth:{
         flex:1,
         width:50,
         margin:5
     }
  })

  export default GoalInput;