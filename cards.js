import React, { Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import Input from "./components/Input";
import {RkCard, rkCardHeader, rkCardContent, rkCardFooter, RkText } from 'react-native-ui-kitten';

class resultCards extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerStyle}>caaaaaaaaards</Text>
                <View>
                <RkCard rkType='shadowed'>
                    <View rkCardHeader>
                        <Text>Instagram</Text>
                    </View>
                    <View rkCardContent>
                        <RkText style={{textAlign:'center'}}>
                        One morning, when Gregor Samsa woke from happy dreams,
                        he found himself transformed in ...
                        </RkText>
                    </View>
                    </RkCard>

                    <RkCard rkType='shadowed'>
                    <View rkCardHeader>
                        <Text>Facebook</Text>
                    </View>
                    <View rkCardContent>
                        <RkText style={{textAlign:'center'}}>
                        One morning, when Gregor Samsa woke from happy dreams,
                        he found himself transformed in ...
                        </RkText>
                    </View>
                    </RkCard>
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
        color: "white"
      },
      innerBox: {
          flex: 1,
          backgroundColor: "black",
          margin: 30,
          marginTop: 25,
          marginBottom: 35,
          paddingTop: 6,
          marginTop: 48
      },
      subheaderFont: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: '100',
        color: "white",
        marginTop: "5%"
      },
      
      inputUser: {
        textInputColor: "black"
      },

      signupLink: {
        backgroundColor: "black",
        paddingTop: 40
      }


    }


export default resultCards;