import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


const GoalItems = (props) => {
    return (
        <View style={styles.textDisplay} > 
        <Text>{props.title}</Text>
      </View>   
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