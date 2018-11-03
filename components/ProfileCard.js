import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import CustomButton from './components/CustomButton.js';
import ProfileImage from './components/ProfileImage';
import UserHandle from './components/UserHandle';
import SocialLogo from './components/SocialLogo';


export default class ProfileCard extends React.Component {
    render() {
      return (
        <View>
          <Card style={styles.card}>
            <AssetExample />
            <SocialLogo></SocialLogo>
            <UserHandle></UserHandle>
            <ProfileImage></ProfileImage>
            <CustomButton></CustomButton>
            <CustomButton></CustomButton>
          </Card>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    card: {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 15,
      height: 240,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    headerStyle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '200',
        marginBottom: 2,
        color: "white"
      },
    subheaderFont: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: '100',
        color: "white",
        marginTop: "5%"
      },
  });
  
AppRegistry.registerComponent('KeepInTouchNative', () => ProfileCard);