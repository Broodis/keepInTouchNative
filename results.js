import React, { Component} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import Input from "./components/Input";
import App from "./App";


class ResultsScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.headerStyle}>search a dijit</Text>
                <View>
                    <Input
                        name=" search someones dijits"
                        color="black"
                        textContentType="telephoneNumber"
                        onChangeText={this.handlePhoneInput}
                        
                      />
                      
                </View>
                <View>
                    <Button 
                        onPress={() => {
                            //this.handleUserCheck();
                            navigate('Cards', { name: 'Jane' })}}
                            title="lets search"
                            
                    />
                </View>
            </View>

        )
    }
}

const styles = {
    container: {
      //marginTop: 48,
      flex: 1,
      backgroundColor: "black"
    },
    headerStyle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '200',
        marginBottom: 2,
        color: "white",
        paddingTop: 200
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
      },


    kittenButton: {
        margin: 80,
        setColor: "blue"
    }
}
 
export default ResultsScreen;