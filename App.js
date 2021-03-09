import { StatusBar } from 'expo-status-bar';
import React, { Children, useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';



export default function App() {

  const [ users, setUsers ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
    

  }, [])


  if (loading) {

    return <View style={styles.loading}><Text>Loading</Text></View>

  }

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />

        <Text style={styles.title}>FlatList</Text>

        <View style={styles.Wrapper}>

            <FlatList

              data={users}
            
              keyExtractor={ item => String(item.id)}
              renderItem={({ item }) => <Text style={styles.flatlist}>{item.name}</Text>}
              
              />

        </View>




    </View>   

  );
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {

      fontSize: 30,
      fontWeight: 'bold',
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      marginBottom: 20
    },

    flatlist:{

      height: 40,
      paddingLeft: 20,
    },

    Wrapper: {
      display: 'flex',
      width: '100%',
      height: '50%',
      padding: 20,
    },

    section: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },

    loading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'yellow',

  }
})
