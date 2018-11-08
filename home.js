import React, { Component} from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import Input from "./components/Input";
import {Font} from 'expo';
import { FontAwesome } from '@expo/vector-icons';

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            password: '',
            loaded: false,
        }
    }

    componentDidMount() {
        this._loadAssetsAsync().then(() => {
            this.setState({loaded: true})
        }).catch(err => {
            console.log(err);
            // Heeeeey what's up
        })
    }

    _loadAssetsAsync() {
        const fontAssets = cacheFonts([FontAwesome.font]);
        return  Promise.all([ ...fontAssets]);
    }


    // static navigationOptions = {
    //     title: 'sign in',
    //   };

    handlePhoneInput = (phone) => {
        this.setState({ phone });
    }

    handlePasswordInput = (password) => {
        this.setState({ password });
    }

    handleUserCheck = () => {
        
        //ajax calls
        // do the stuff below
        // but for now...
        return;
        axios.post('https://my-heroku-domain.com/api/userCheck', {
            phone: '123-456-7890'
        }).then(response => {
            // EITHER
            // set login data using AsyncStorage
            // https://facebook.github.io/react-native/docs/asyncstorage
            // then navigate to MyScreen which loads the data from AsyncStorage
            // OR...
            // navigate to MyScreen with the data passed in to the second parameter
        })
        // axios.post('your db url', some info from)
    }

    render() {
        if (!this.state.loaded) {
            return ''
        }
        const { navigate } = this.props.navigation;
        return (
          
            <View style={styles.container}>
            <Text style={styles.headerStyle1}>Dijits</Text>
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
                            //keyboardType="number-pad"
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
                        text="sign in"
                        onTouch={() => {
                            this.handleUserCheck();
                            navigate('Results', { name: 'Jane' })}
                        }
                    />
                    <View style={styles.signupLink}>
                        <Button 
                            onPress={() => {
                            this.handleUserCheck();
                            navigate('SignUp', { name: 'Jane' })}}
                            title="not already a user? sign up here"
                        />
                    </View>
                </View> 
            </View>

           

        );
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
            paddingTop: 10
          },
        headerStyle1: {
            fontSize: 70,
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
              marginTop: 5,
              marginBottom: 35,
              paddingTop: 6,

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
            textInputColor: "black"
          },

          signupLink: {
            backgroundColor: "black",
            paddingTop: 40
          }


        }

    export default HomeScreen;