import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const App = () => (
  <View style = {styles.container}>
    <View style = {styles.box}></View>
      <View style = {styles.box2}>
        <View style = {styles.boxText}>
          <Text style = {styles.text1}>Texto indefinido aqui.</Text>
          <Text style = {styles.text2}> Texto indefinido aqui 2 </Text>
        </View>
        <View style = {styles.box3}></View>
        <View style = {styles.box3}></View>
        <View style = {styles.box3}></View>
        <View style = {styles.box4}></View>
        <View style = {[styles.box4, styles.box44]}></View>
        
        
      </View>
  </View>
  
);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#d9f5b5',
    flexWrap: 'wrap',
  },
  box: {
    height: 300,
    width: '97%',
    backgroundColor: '#fecd23',
    margin: 5,
    marginTop: 10,
  },
  box2: {
    height: '80%',
    width:'100%',
    backgroundColor: 'red',
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  boxText:{
    height: '17%',
    width: '95%',
    margin: 10,
    padding: 5,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1:{
    fontSize: 22,
  },
  box3:{
    height: 110,
    width: 110,
    backgroundColor: '#d8f171',
    margin: 10,
    borderColor: '#fcffd9',
    borderWidth: 5,
  },
  box4:{
    height: 100,
    width: 220,
    backgroundColor: '#d8f171',
    borderColor: '#fcffd9',
    borderWidth: 5,
  },
  box44:{
    height: 100,
    width: 95, 
  }
});
export default App;