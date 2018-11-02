import React, { Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import Input from "./components/Input";
import homeScreen from "./home";
import resultsScreen from "./results";
import signupScreen from "./signup";
import signupScreen2 from "./signup2";
import resultCards from "./cards";
import {RkButton} from 'react-native-ui-kitten';
import {RkCard} from 'react-native-ui-kitten';


import {
    createStackNavigator,
  } from 'react-navigation';
import SignUp2 from './signup2';
  
  const App = createStackNavigator({
    Home: { screen: homeScreen },
    Results: { screen: resultsScreen },
    SignUp: { screen: signupScreen},
    SignUp2: { screen: signupScreen2},
    Cards: { screen: resultCards }
    
  });
  
  export default App;
//"results" page will be search page//
//cards.js will be where the the actual results are displayed//


