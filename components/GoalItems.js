import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';


const GoalItems = (props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
        <View style={styles.textDisplay} > 
        <Text>{props.title}</Text>
      </View>   
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textDisplay:{
        marginVertical:10,
        padding:10,
        borderColor:'grey',
        backgroundColor:'#fff8dc',
        borderWidth:1
      }
});

export default GoalItems;