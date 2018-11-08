import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button, Linking } from 'react-native';

export default class SmallButton extends Component {
    _handlePress = () => {
        Linking.openURL(this.props.href);
        this.props.onPress && this.props.onPress();
    };






    // constructor(props) {
    //     super(props);

    //     this.onTouch = this.onTouch.bind(this);
    // }
    // onTouch() {
    // alert('this button works!');
    //  }



    render() {
        return (
            <View
                // onTouchStart={this.props.onTouch}
                // onTouchStart={this.onTouch}
                style={styles.buttonWrapper}>
                <Text style={styles.red} {...this.props} onPress={this._handlePress}>
                    {this.props.text}
                </Text>
                {/* <Text style={styles.red}>
                    {this.props.text}
                </Text> */}
            </View>
        );
    }
}



const styles = StyleSheet.create({
    buttonWrapper: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 30,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
        width: 160,
    },
    buttonInner: {
        textAlign: "center",
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'black',
        textAlign: "center"
    },
});

AppRegistry.registerComponent('KeepInTouchNative', () => SmallButton);