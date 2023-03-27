import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';

export default function App() {

  const image = require('./resources/bg.jpg');

  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      tarefa: 'MInha primeira tarefa.'
    },
    {
      id: 2,
      tarefa: 'MInha segunda tarefa.'
    }
  ]);

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function deletarTarefa(id){
    let newTarefas = tarefas.filter(function(val){
      return val.id != id;
    });

    setTarefas(newTarefas);
  }

  return (
    <ScrollView style={{flex:1,marginTop:30}}>
      <StatusBar hidden />

        <ImageBackground source={image} style={styles.image}>
          <View style={styles.coverView}>
            <Text style={styles.textHeader}>To-do LIST</Text>
          </View>
        </ImageBackground>

        {
        tarefas.map(function(val){
         return ( 
          <View style={styles.tarefaSingle}>
            <View style={{flex:1,width:'100%',padding:10}}> 
              <Text>{val.tarefa}</Text>
            </View>

            <View style={{alignItems:'flex-end',flex:1,padding:10}}>
              <TouchableOpacity onPress={()=> deletarTarefa(val.id)}><AntDesign name='minuscircleo' size={24} color='black' /></TouchableOpacity>
            </View>
          </View>);
        })

        }

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width:'100%',
    height: 80,
    resizeMode:'cover'
  },
  
  coverView: {
    width:'100%',
    height:80,
    backgroundColor:'rgba(0,0,0,0.4)'
  },

  textHeader: {
    textAlign:'center',
    color:'white',
    fontSize:22,
    marginTop:20,
    fontFamily:'Inter_900Black'
  },

  tarefaSingle: {
    marginTop:30,
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor:'black',
    flexDirection:'row',
    paddingBottom:10
  }
});
