import React, { Component} from 'react';
import {View, ScrollView, Dimensions, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import SmallButton from './components/smallButton';
import Input from "./components/Input";
import {RkCard, rkCardHeader, rkCardContent, rkCardFooter, RkText, withRkTheme } from 'react-native-ui-kitten';
import { SocialIcon } from 'react-native-elements';
const { height } = Dimensions.get('window');

class resultCards extends React.Component {
    state = {
        screenHeight: 0,
    };
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    };
    render() {
        const scrollEnabled = this.state.screenHeight > height;
        return (
            <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollview}
            scrollEnabled={scrollEnabled}
            onContentSizeChange={this.onContentSizeChange}
            >
            <View style={styles.container}>
                <Text style={styles.headerStyle}>Results</Text>
                <View>
                <RkCard style={styles.topCard} rkType='shadowed'>
                    <View style={styles.CardHeader} rkCardHeader>
                        <View style={styles.iconStyle}>
                        <SocialIcon type='instagram'/> 
                        </View>
                        <View style={styles.handleStyle}>
                        <Text style={styles.handleFont}>@Jane_Smith</Text>
                        </View>
                    </View>
                    <View style={styles.buttonView} rkCardContent>
                    <SmallButton text="View Profile"/>
                    </View>
                    </RkCard>

                </View>
            </View>
            </ScrollView>
        )
    }
}


const styles = {
    buttonView: {
        alignItems: "flex-end",
        marginBottom: 25
    },
    handleFont: {
        fontSize: 20,
        color: "white"
    },
    handleStyle: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconStyle: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
    },
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
    CardHeader: {
        backgroundColor: "purple",
        height: 75,
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