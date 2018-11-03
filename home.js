import React, { Component} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import Input from "./components/Input";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            password: ''
        }
    }
    static navigationOptions = {
        title: 'sign in',
      };

    handlePhoneInput = (phone) => {
        this.setState({ phone });
    }

    handlePasswordInput = (password) => {
        this.setState({ password });
    }

    handleUserCheck = () => {
        // axios.post('your db url', some info from)
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
          
            <View style={styles.container}>
            <Text style={styles.headerStyle}>Dijits</Text>
                <View style={styles.innerBox}>
                    <Text style={styles.headerStyle}>sign in</Text>
                    <Text style={styles.subheaderFont}>please enter your login</Text>
                    <Text style={styles.subheaderFont}>or create your free account</Text>
                   <View>
                        <Input 
                            placeholderTextColor="black"
                            name="Phone Number"
                            color="black"
                            textContentType="telephoneNumber"
                            maxLength={10}
                            keyboardType="number-pad"
                            onChangeText={this.handlePhoneInput}
                        />
                        <Input
                            color="black"
                            name="Password"
                            secureTextEntry={true}
                            onChangeText={this.handlePasswordInput}
                        />
                    </View>
                    <CustomButton
                        text="log in"
                        onTouch={() => {
                            this.handleUserCheck();
                            navigate('Results', { name: 'Jane' })}
                        }
                    />
                </View> 
            </View>

           

        );
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

    export default HomeScreen;