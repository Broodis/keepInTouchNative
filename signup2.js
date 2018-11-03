import React, { Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import Input from "./components/Input";
import HomeScreen from "./home";
import ResultsScreen from "./results";
import SignupScreen from "./signup";
import App from "./app";

class SignUp2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Instagram: '',
            Facebook: '',
            Snapchat: '',
            Twitter: '',
            YouTube: ''
        }
    }

    handleInstagramInput = (instagram) => {
        this.setState({ instagram });
    }

    handleFacebookInput = (Facebook) => {
        this.setState({ Facebook });
    }

    handleSnapchatInput = (Snapchat) => {
        this.setState({ Snapchat });
    }

    handleTwitterInput = (Twitter) => {
        this.setState({ Twitter });
    }

    handleYouTubeInput = (YouTube) => {
        this.setState({ YouTube });
    }

  

    render() {
        //const { navigate } = this.handleUserCheck;
        
        return (
            
            <View style={styles.container}>
                <Text style={styles.headerStyle}>Lets sign you up real quick</Text>
                <View style={styles.signupSubmissions}>
                    <Input 
                        name="instagram"
                        color="black"
                        textContentType="link"
                        onChangeText={this.handleInstagramInput}
                    />
                    <Input 
                        name="facebook"
                        color="black"
                        textContentType="link"  
                        onChangeText={this.handleFacebookInput}

                    />
                    <Input 
                        name="snapchat"
                        color="black"
                        //textContentType="telephoneNumber"
                        onChangeText={this.handleSnapchatInput}
                    />
                    <Input 
                        name="twitter"
                        color="black"
                        secureTextEntry={true} 
                        onChangeText={this.handleTwitterInput}
                    />
                    <Input 
                        name="youtube"
                        color="black"
                        secureTextEntry={true} 
                        onChangeText={this.handleYouTubeInput}
                    />
                
                
                
                    <View style={styles.signupButton}>
                    <CustomButton
                        text="finish and search"
                        onTouch={() => {
                            //this.handleUserCheck();
                            navigate('Results', { name: 'Jane' })}
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

 
export default SignUp2;