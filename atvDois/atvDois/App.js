import React from "react";
  import { StyleSheet, Text, View, Image } from "react-native";

  export default function App(){
    return (
      <View style={styles.container}>
        <Image source={require('./img/inter.png') }></Image>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })