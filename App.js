import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './src/Home';
import Login from './src/Login';
import Produto from "./src/Produto";
import IniciarCompra from './src/IniciarCompra';
import { useState } from 'react';
import Cadastro from './src/Cadastro';

const Tab = createBottomTabNavigator();

export default function App() {

  const[logado, setLogado] = useState(false);
  const[cadastro, setCadastro] = useState(false);
  
  if( logado == false ) {
    return( <Login setLogado={setLogado} setCadastro={setCadastro}/>)
  }

  if( cadastro ) {
    return( <Cadastro setCadastro={setCadastro} setLogado={setLogado}/>)
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'
        screenOptions={{
          tabBarStyle: { backgroundColor: "#8E44AD"},
          headerStyle: { backgroundColor: "#8E44AD"},
          tabBarLabelStyle: { color: "white"},
          headerTitleStyle: { color: "white"},
          tabBarActiveBackgroundColor: "#A452C6",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "white",
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            headerBackgroundContainerStyle: "purple",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size}/>
            )
        }}
        />
        <Tab.Screen 
          name="Produto"
          component={Produto}
          options={{
            tabBarLabel: 'Produtos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-open-page-variant-outline" color={color} size={size}/>
            )
        }}
        />
        <Tab.Screen 
          name="Produtos Selecionados"
          component={IniciarCompra}
          options={{
            tabBarLabel: 'Produtos Selecionadosos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-open-page-variant-outline" color={color} size={size}/>
            )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

