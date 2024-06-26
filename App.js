import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { headerShown } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/Home';
import { useState } from 'react';
import Header from './components/Header';
//import Local from './components/Local';
import LocalProv from './src/LocalProv';
import Login from './src/Login';
import Produto from "./src/Produto";
import IniciarCompra from './src/IniciarCompra';
import Cadastro from './src/Cadastro';
import Devolucao from './src/Devolucao';

const Tab = createBottomTabNavigator();


export default function App(navigation) {

  const[ logado, setLogado ] = useState(true);
  const[ cadastro, setCadastro ] = useState(false);
  
  if( logado == false ) {
    return( <Login setLogado={setLogado} setCadastro={setCadastro}/>)
  }

  if( cadastro ) {
    return( <Cadastro setCadastro={setCadastro} setLogado={setLogado}/>)
  }

  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator initialRouteName='Home'
        screenOptions={{
          headerShown: false,
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
            headerShown: false,
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
            headerShown: false,
            tabBarLabel: 'Produtos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-open-page-variant-outline" color={color} size={size}/>
            )
        }}
        />
        <Tab.Screen 
          name="Devolucao"
          component={Devolucao}
          options={{
            headerShown: false,
            tabBarLabel: 'Devolução',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="arrow-u-up-right" color={color} size={size}/>
            )
        }}
        />
        <Tab.Screen 
          name="LocalProv"
          component={LocalProv}
          options={{
            headerShown: false,
            tabBarLabel: 'Local',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map-search" color={color} size={size}/>
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

