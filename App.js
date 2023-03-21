import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const image = require('./resources/bg.jpg');

  return (
    <View style={{flex:1,marginTop:30}}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.coverView}>
            <Text style={styles.textHeader}>To-do LIST</Text>
          </View>
        </ImageBackground>
    </View>
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
    marginTop:20
  }
});
