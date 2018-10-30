import React, { Component } from 'react';
import { AppRegistry, TextInput, StyleSheet, View } from 'react-native';

export default class usernameInput extends Component {
  constructor(props) {
    super(props);
    this.state = { placeHolder: 'Username' };
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginRight:40,
    marginLeft:40,
    marginTop:20,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'blue',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    textAlign: "center"
  }
})

    AppRegistry.registerComponent('KeepInTouchNative', () => usernameInput);