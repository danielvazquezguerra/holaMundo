
import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'
import { Alert, StyleSheet, Text, View } from 'react-native';



export default function App() {

  const buscaLocation = async () => {

    console.log(Permissions);

    let { status } = await Permissions.askAsync(Permissions.LOCATION)


    if ( status !== 'granted' ) {

      return Alert.alert('No tenemos permisos')
    }

    const location = await Location.getCurrentPositionAsync({})
    console.log(location);
  }



  useEffect(() => {

    buscaLocation()

  }, []);

  return (

    <View style={styles.container}>
    
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

})
