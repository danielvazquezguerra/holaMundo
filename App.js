import { StatusBar } from 'expo-status-bar';
import React, { Children, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';



const Texto = () => {

  const [ texto, setTexto ] = useState('Hola Daniel');

  const actualizaTexto = () => {

    setTexto('Adios Mundo Cruel');
  }

  return (

    <Text style={styles.texto} onPress={actualizaTexto}>{texto}</Text>

  )
}

export default function App() {
  return (
    <View style={styles.container}>

        <Texto />

        <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  texto: {
    fontSize: 24,
    color: 'blue',
    fontFamily: 'Gotham',
  },

  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
