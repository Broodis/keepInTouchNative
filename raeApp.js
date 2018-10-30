import React, { Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import Input from "./components/Input";

class App extends React.Component {
    render() {
        return (
          // Try setting `flexDirection` to `column`.
            
            <View style={styles.container}>
            
                <Text style={styles.headerStyle}>Dijits</Text>
                <View style={styles.pinkBox}>
                    <View style={[{flex: 1}, styles.elementsContainer]}>
                        <View style={{flex: 2, backgroundColor: '#000000'}}> 
                        <View style={{flex: .6, backgroundColor: '#000000'}}>
                            <Text style={styles.headerFont}>
                                sign up now
                            </Text>
                            <Text style={styles.subheaderFont}>please enter your login</Text>
                            <Text style={[styles.subheaderFont, {marginTop: 0}]}>or craete your free account below</Text>
                        </View>
                        <CustomButton/>
                        </View>
                        <View style={{flex: 3, backgroundColor: '#000000'}}>
                        <View style={{flex: 1, backgroundColor: '#000000'}}>

                        <Input/>
                       
                        {/* { <Button
                            title="sign up"
                            titleStyle={{ fontWeight: "700", color: "green" , fontSize: 30}}
                            buttonStyle={{
                                backgroundColor: "purple",
                                width: 300,
                                height: 55,
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 27.5,
                                marginTop: "70%"
                            }}
                            containerStyle={{ marginTop: 20 }}
                            />} */}
                         </View>
                         
                         </View>
                    </View>
                    
                </View>    
            </View>
        );
      }
    }
    
    const styles = {
      container: {
        marginTop: 48,
        flex: 1
      },
      headerStyle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 2
      },
      elementsContainer: {
        backgroundColor: '#ecf5fd',
        // marginLeft: 24,
        // marginRight: 24,
        // marginBottom: 24,
        margin: (24, 24, 24, 24)
      },

      pinkBox: {
        flex: 1, 
        flexDirection: "column",
        backgroundColor: '#a9a9a9',
        //height: "100%"
      },

      headerFont: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '200',
        marginTop: "20%",
        color: "white"
      }, 

      subheaderFont: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: '100',
        color: "white",
        marginTop: "4%"
      },

      signIn: {
        backgroundColor: "white",
        borderColor: "transparent",
        borderWidth: 0,
        color: "black"                        

      },

      signInButton: {
        borderRadius: 27.5,
        width: 300,
        height: 55,
        color: "black"
      }


    }

    // let freeAccountFont = {
    //     ...styles.subheaderFont,
    //     marginTop: 0
    // }

export default App;