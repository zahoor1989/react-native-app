import React,{useState,useEffect} from "react";
import { Button, View, Text, FlatList, StyleSheet } from "react-native";

const Universities = (props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country=United+Kingdom')
        .then((response) => response.json())
        .then(json => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, []);

    return(
      <FlatList 
      data={data}
      keyExtractor={({name},index) => index.toString()}
      renderItem={(dataItem) => (
          <View style={styles.textContainer}>
              <Text>{dataItem.item.name}</Text>
          </View>
      )}
      />
    )
}

const styles= StyleSheet.create({
    textContainer : {
        margin:10
    }
})



export default Universities;