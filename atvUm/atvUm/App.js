import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const App = () => (
  <View style={styles.container}> 
    <View style={styles.containerText}>
      <Text style={styles.text}>
        Camera
      </Text> 
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0d3b8',
  },

  containerText:{
    backgroundColor: 'grey',
    height: '10%',
  },

  text:{
    alignSelf: 'flex-start',
    fontSize: 25,
    color: '#FFFF',
    padding: 15,
  },
});

export default App;