// SEARCH PAGE
import React, { Component} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import Input from "./components/Input";
import App from "./App";

class ResultsScreen extends React.Component {
    state = {
        fontLoaded: false,
        telephoneNumber: '',
    }
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
                        // onChangeText={this.handlePhoneInput}
                        value={this.state.telephoneNumber}
                      />
                      
                </View>
                <View>
                    <Button 
                        onPress={() => {
                            // How do you configure www.somewhere.com
                            // The URL needs to come from a configuration of sorts
                            // Before you are live, you can certainly hard-code
                            // the same URL for all your calls
                            // When you're in production, that can get risky
                            

                            // Uncomment block below for ajaxy love
                            /*
                            axios.get('https://sfkhjsdf.herokuapp.com/api/search?query=' + this.state.telephoneNumber)
                            .then(results => {
                                // in here, you navigate("Cards", {yerData})
                            })
                            */
                            
                            //this.handleUserCheck();
                            navigate('Cards', { name: 'Jane' })}
                        }
                        title="lets search"
                            
                    />
                </View>
            </View>

        )
    }

    // handlePhoneInput = evt => {
    //     this.setState({telephoneNumber: evt.target.value})
    // }
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