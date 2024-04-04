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
import LocalProv from './src/LocalProv'

const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Header/>
      <Tab.Navigator initialRouteName='Home' >
        <Tab.Screen name="Home" component={Home}
        options={{
          headerShown: false,
        }} />
        <Tab.Screen name="Local" component={LocalProv}
        options={{
          headerShown: false,
        }}  />
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

