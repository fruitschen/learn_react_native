/**
 * Using TextInput
 */

import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Text style={{padding: 10}}>
          Original Text:"{this.state.text}"
        </Text>
        <Text style={{padding: 10}}>
          Text Length:{this.state.text.length}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
