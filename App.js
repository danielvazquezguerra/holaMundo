import { StatusBar } from 'expo-status-bar';
import React, { Children, useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Text, Modal, Button } from 'react-native';



export default function App() {

  const [modal, setModal] = useState(false);




  return (

    <View style={styles.container}>

      <Modal

        animationType='slide'
        transparent={true}
        visible={modal}
      
      >

        <View
          style={styles.center}
        >

          <View style={styles.content}>

            <Text>Soy un modal</Text>

            <Button

              title='Cerrar modal'
              onPress={()=>setModal(!modal)}
              style={styles.button}
            
            />

      


          </View>



        </View>

      </Modal>

      <Button 

        title='Abrir modal'
        onPress={()=>{setModal(!modal)}}
        style={styles.button}
      />

    </View>   

  );
}

const styles = StyleSheet.create({

    content: {

      backgroundColor



    },

      container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },

    center: {

      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

    },

})
