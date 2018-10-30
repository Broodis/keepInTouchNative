import React, { Component } from 'react';
import { AppRegistry, TextInput, StyleSheet } from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { placeHolder: 'Enter Phone Number' };
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        placeholderTextColor={this.props.color}
        placeholder={this.props.name}
  
        
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
    backgroundColor:'white',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    textAlign: "center"
  },

  placeHolder: {
    color: "red"
  }
})

    AppRegistry.registerComponent('KeepInTouchNative', () => Input);