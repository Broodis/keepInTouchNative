import React, { Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import Input from "./components/Input";
import HomeScreen from "./home";
import ResultsScreen from "./results";

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            password: ''
        }
    }

    handleFirstNameInput = (name) => {
        this.setState({ name });
    }

    handleLastNameInput = (lastName) => {
        this.setState({ lastName });
    }

    handlePhoneInput = (phone) => {
        this.setState({ phone });
    }

    handlePasswordInput = (password) => {
        this.setState({ password });
    }

    

    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.headerStyle}>Lets sign you up real quick</Text>
                <View style={styles.signupSubmissions}>
                    <Input 
                        name="first name"
                        color="black"
                        textContentType="name"
                        onChangeText={this.handleFirstNameInput}
                    />
                    <Input 
                        name="last name"
                        color="black"
                        textContentType="name"  
                        onChangeText={this.handleLastNameInput}

                    />
                    <Input 
                        name="phone number"
                        color="black"
                        textContentType="telephoneNumber"
                        onChangeText={this.handlePhoneInput}
                    />
                    <Input 
                        name="password"
                        color="black"
                        secureTextEntry={true} 
                        onChangeText={this.handlePasswordInput}
                    />
                    <Input 
                        name="confirm password"
                        color="black"
                        secureTextEntry={true} 
                        onChangeText={this.handlePasswordInput}
                    />
                
                
                
                    <View style={styles.signupButton}>
                        <CustomButton 
                            text="now lets get them socials"
                            onTouch={() => {
                                //this.handleUserCheck();
                                navigate('SignUp2', { name: 'Jane' })}
                            }
                        />
                    </View>
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
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '200',
        marginBottom: 2,
        color: "white",
        paddingTop: 20
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

      signupSubmissions: {
          paddingTop: 5
      }




    }

 
export default SignUp;