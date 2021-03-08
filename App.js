import { StatusBar } from 'expo-status-bar';
import React, { Children, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';



export default function App() {

  const [ text, setText ] = useState('')
  const [ submit, setSubmit ] = useState('Hola Usuario');


  return (

    <View style={styles.container}>

      <StatusBar style="auto" />


      <ScrollView style={styles.scrollView}>

        <View style={ styles.Wrapper}>

            <Text style={styles.texto}>{submit}</Text>

            <TextInput 
            
              style={styles.input} 
              defaultValue={text}
              onChangeText={ e => setText(e)}
              placeholder='Escribe aquí' 
              
              />


            <TouchableOpacity 
                style={styles.TouchableOpacity}
                underlayColor={'#999'}
                activeOpacity={0.2}
                title="Aceptar"
                onPress={() => {

                  setSubmit(text);
                  alert(`Tu texto ${text} ha sido enviado`);

                }}
                
            >

              <Text>Aceptar</Text>

            </TouchableOpacity>


        </View>

        </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({

  Wrapper: {

    display: 'flex',
    height: Dimensions.get('window').height,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },

  scrollView:{
    width: Dimensions.get('window').width,
    
  },

  TouchableOpacity:{
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 2,
    marginTop: 10,
  },
  texto: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    fontSize: 24,
    color: 'blue',
    fontWeight: '700',
    color: '#000000',
    marginBottom: 20,
  },

  input: 
  {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },

  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
