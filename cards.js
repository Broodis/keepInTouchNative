import React, { Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import Input from "./components/Input";
import {RkCard, rkCardHeader, rkCardContent, rkCardFooter, RkText } from 'react-native-ui-kitten';
import { SocialIcon } from 'react-native-elements';
import ViewProfileButton from './components/ViewProfileButton';

class resultCards extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerStyle}>Results</Text>
                <View>
                <RkCard style={styles.topCard} rkType='shadowed'>
                    <View rkCardHeader>
                    <SocialIcon type='instagram'/> 
                        <Text>Instagram</Text>
                    </View>
                    <View rkCardContent>
                        <ViewProfileButton
                            text="View Profile"
                        ></ViewProfileButton>
                        <RkText style={{textAlign:'center'}}>
                        One morning, when Gregor Samsa woke from happy dreams,
                        he found himself transformed in ...
                        </RkText>
                    </View>
                    </RkCard>

                    <RkCard style={styles.card} rkType='shadowed'>
                    <View rkCardHeader>
                    <SocialIcon type='facebook'/>
                        <Text>Facebook</Text>
                    </View>
                    <View rkCardContent>
                        <RkText style={{textAlign:'center'}}>
                        One morning, when Gregor Samsa woke from happy dreams,
                        he found himself transformed in ...
                        </RkText>
                    </View>
                    </RkCard>
                    <RkCard style={styles.card} rkType='shadowed'>
                    <View rkCardHeader>
                    <SocialIcon type='twitter'/>
                        <Text>Twitter</Text>
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
    topCard: {
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    card: {
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 0,
    },
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