import React, { Component, useState, useEffect } from "react";
import { KeyboardAvoidingView ,StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Animated } from "react-native";

export default function App(){

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
    useEffect(() =>{
      Animated.spring(offset.y,{
        toValue:0,
        speed: 4,
        bounciness: 20,
      })
    }, []);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require('./img/novibrasil.png')}>

        </Image>
      </View>

      <Animated.View style={[styles.container,
         {
          transform: [
            { translateY: offset.y}
          ]
         }
         ]}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
          autoCorrect={false}
          onChange={()=> {}}>
        </TextInput>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          autoCorrect={false}
          onChange={()=> {}}>
        </TextInput>

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>
            Registrar-se
          </Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },

  containerLogo:{
    flex:1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 70,
    
  },
  input:{
    backgroundColor: '#FFF',
    width:'90%',
    marginBottom: 15,
    color:'#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 15,
  },

  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText:{
    color: '#FFF',
    fontSize: 18,
  },
  btnRegister:{
    marginTop: 10,
  },
  registerText:{
    color: '#FFF',
  }
});