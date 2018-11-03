import React, { Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import Input from "./components/Input";
import HomeScreen from "./screens/home";
import ResultsScreen from "./screens/results";


import {
    createStackNavigator,
  } from 'react-navigation';
  
  const App = createStackNavigator({
    Home: { screen: HomeScreen },
    Results: { screen: ResultsScreen },
  });
  
  export default App;



