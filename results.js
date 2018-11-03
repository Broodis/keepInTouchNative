import React, { Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import Input from "./components/Input";



class ResultsScreen extends React.Component {
    render() {
        return (
            <View 
                style={styles.container}
            >
                <Text style={styles.headerStyle}>search results</Text>
            </View>

        )
    }
}

const styles = {
    container: {
      marginTop: 48,
      flex: 1,
      backgroundColor: "purple"
    },
    headerStyle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '200',
        marginBottom: 2,
        color: "white"
      },
      innerBox: {
          flex: 1,
          backgroundColor: "black",
          margin: 30,
          marginTop: 25,
          marginBottom: 35,
          paddingTop: 60
      },
      subheaderFont: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: '100',
        color: "white",
        marginTop: "5%"
      },
      inputStyle: {
          color: "red"
      },

      inputUser: {
        textInputColor: "black",
      }


    }

 
export default ResultsScreen;