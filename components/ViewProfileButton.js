import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';

export default class ViewProfileButton extends Component {
    constructor(props) {
        super(props);     
    }

    render() {
        return (
            <View 
            onTouchStart={this.props.onTouch}
            style={styles.buttonWrapper}>    
                <Text style={styles.red}>     
                    {this.props.text}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonWrapper: {
    marginRight:40,
    marginLeft:40,
    marginTop:30,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    },
    buttonInner: {
      textAlign: "center",
      color: 'yellow',
      fontWeight: 'bold',
      fontSize: 30
    },
    red: {
        backgroundColor: 'purple',
        color: 'white',
        textAlign: "center"
    },
  });

AppRegistry.registerComponent('KeepInTouchNative', () => ViewProfileButton);